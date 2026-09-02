import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  Star,
  GitFork,
  ExternalLink,
  Code2,
  ImageOff,
  AlertOctagon,
  Clock,
} from "lucide-react";
import "./Project.css";

const CACHE_KEY = "github_repos_cache";
const CACHE_EXPIRATION_MS = 24 * 60 * 60 * 1000; // 1 Day in Milliseconds

const Project = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);

  const userReposUrl = "https://api.github.com/users/yashKappa/repos";

  // Helper to format remaining seconds into MM:SS format
  const formatTime = (seconds) => {
    if (seconds === null || seconds <= 0) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Process Rate-Limit-Reset timestamps from HTTP headers
  const handleRateLimit = (response) => {
    const resetTimeHeader = response.headers.get("X-RateLimit-Reset");
    if (resetTimeHeader) {
      const resetTimeMs = parseInt(resetTimeHeader, 10) * 1000;
      const currentMs = Date.now();
      const diffSeconds = Math.max(0, Math.ceil((resetTimeMs - currentMs) / 1000));
      setTimeRemaining(diffSeconds);
    } else {
      setTimeRemaining(3600); // Default to 1 hour if header is missing
    }
    setRateLimitExceeded(true);
  };

  // Helper to load valid cached data from localStorage
  const loadFromCache = () => {
    try {
      const cachedItem = localStorage.getItem(CACHE_KEY);
      if (!cachedItem) return null;

      const { data, timestamp } = JSON.parse(cachedItem);
      const isExpired = Date.now() - timestamp > CACHE_EXPIRATION_MS;

      if (!isExpired && data && data.length > 0) {
        return data;
      }
      return null;
    } catch (error) {
      console.error("Error parsing local cache:", error);
      return null;
    }
  };

  // Helper to save repository data to localStorage with timestamp
  const saveToCache = (data) => {
    try {
      const cachePayload = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cachePayload));
    } catch (error) {
      console.error("Error saving data to local cache:", error);
    }
  };

  const fetchReadmeImage = async (repoUrl) => {
    try {
      const readmeUrl = `${repoUrl}/contents/README.md`;
      const response = await fetch(readmeUrl);

      if (response.status === 403 || response.status === 429) {
        return [];
      }

      if (!response.ok) throw new Error("Failed to fetch README");

      const data = await response.json();
      const content = atob(data.content);

      const regex = /!\[.*?\]\((.*?)\)/g;
      const matches = [...content.matchAll(regex)];

      if (matches.length > 0) {
        return matches.map((match) => {
          const imageUrl = match[1];
          return imageUrl.startsWith("http")
            ? imageUrl
            : `${repoUrl.replace(
                "api.github.com/repos",
                "raw.githubusercontent.com"
              )}/main/${imageUrl}`;
        });
      }

      return [];
    } catch (error) {
      console.error("Error fetching README image:", error);
      return [];
    }
  };

  const fetchRepos = async () => {
    setLoading(true);
    setRateLimitExceeded(false);

    // Step 1: Attempt to load valid data from localStorage first
    const cachedData = loadFromCache();
    if (cachedData) {
      setRepos(cachedData);
      setLoading(false);
      return;
    }

    // Step 2: Fetch directly from GitHub API if cache is missing or expired
    try {
      const response = await fetch(userReposUrl);

      // Detect Rate-Limit Errors (403 Forbidden or 429 Too Many Requests)
      if (response.status === 403 || response.status === 429) {
        handleRateLimit(response);
        setLoading(false);
        return;
      }

      if (!response.ok) throw new Error("Failed to fetch repositories");

      const data = await response.json();

      // Fetch README images for each repository concurrently
      const reposWithImages = await Promise.all(
        data.map(async (repo) => {
          const images = await fetchReadmeImage(repo.url);
          return { ...repo, images };
        })
      );

      // Step 3: Cache fetched result for 1 day and update state
      saveToCache(reposWithImages);
      setRepos(reposWithImages);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  // Countdown timer effect + Automatic fetch when timer reaches zero
  useEffect(() => {
    if (!rateLimitExceeded || timeRemaining === null || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          setRateLimitExceeded(false);
          fetchRepos(); // Automatically fetch fresh data once timer finishes
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [rateLimitExceeded, timeRemaining]);

  return (
    <section id="Project" className="neu-project-section">
      <div className="neu-project-container">
        {/* Header Section */}
        <div className="neu-project-header">
          <div className="neu-status-badge">
            <span className="neu-pulse-dot"></span>
            <FolderGit2 size={15} className="neu-icon-accent" />
            <span>PORTFOLIO BUILDS // GITHUB REPOSITORIES</span>
          </div>

          <h2 className="neu-project-title">Featured Projects</h2>
          <p className="neu-project-subtitle">
            Exploration of open-source work, full-stack applications, and
            experimental builds.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="neu-loading-state">
            <div className="neu-spinner"></div>
            <p>Fetching repositories from GitHub...</p>
          </div>
        ) : rateLimitExceeded ? (
          /* Rate Limit Exceeded UI */
          <motion.div
            className="neu-rate-limit-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="neu-rate-limit-icon">
              <AlertOctagon size={40} className="neu-icon-warning" />
            </div>

            <h3 className="neu-rate-limit-title">API Request Limit Reached</h3>

            <p className="neu-rate-limit-desc">
              GitHub restricts unauthenticated API requests to 60 per hour to ensure server stability. 
              The project collection will automatically reload once the rate-limit window resets.
            </p>

            <div className="neu-timer-box">
              <Clock size={20} className="neu-timer-icon" />
              <span className="neu-timer-label">Resetting in:</span>
              <span className="neu-timer-countdown">
                {formatTime(timeRemaining)}
              </span>
            </div>

            <div className="neu-rate-limit-actions">
              <a
                href="https://github.com/yashKappa"
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn neu-btn-secondary"
              >
                <i className="fa-brands fa-github"></i>
                <span>View Direct GitHub Profile</span>
              </a>
            </div>
          </motion.div>
        ) : (
          /* Repository Grid */
          <div className="neu-project-grid">
            {repos.map((repo, index) => {
              const websiteUrl =
                repo.homepage || `https://yashkappa.github.io/${repo.name}`;
              const hasImage = repo.images && repo.images.length > 0;

              return (
                <motion.div
                  key={repo.id}
                  className="neu-project-card neu-card-interactive"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {/* Image Container */}
                  <div className="neu-project-image-box">
                    {hasImage ? (
                      <img
                        src={repo.images[0]}
                        alt={`Screenshot of ${repo.name}`}
                        className="neu-project-img"
                      />
                    ) : (
                      <div className="neu-no-image">
                        <ImageOff size={28} className="neu-icon-muted" />
                        <span>No Preview Image</span>
                      </div>
                    )}
                    {repo.language && (
                      <span className="neu-lang-tag">
                        <Code2 size={12} /> {repo.language}
                      </span>
                    )}
                  </div>

                  {/* Repository Details */}
                  <div className="neu-project-body">
                    <h3 className="neu-project-name">{repo.name}</h3>

                    <p className="neu-project-desc">
                      {repo.description ||
                        "No description provided for this repository."}
                    </p>

                    {/* Stats Badges */}
                    <div className="neu-project-stats">
                      <div className="neu-stat-pill">
                        <Star size={14} className="neu-icon amber" />
                        <span>{repo.stargazers_count} Stars</span>
                      </div>
                      <div className="neu-stat-pill">
                        <GitFork size={14} className="neu-icon cyan" />
                        <span>{repo.forks_count} Forks</span>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="neu-project-actions">
                      <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-btn neu-btn-primary neu-btn-sm"
                        title="Live Preview"
                      >
                        <span>Live Site</span>
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-btn neu-btn-secondary neu-btn-sm"
                        title="GitHub Repository"
                      >
                        <i className="fa-brands fa-github"></i>
                        <span>Repo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;