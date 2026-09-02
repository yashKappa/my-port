import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Activity as ActivityIcon, 
  Trophy, 
  Award, 
  GitCommit, 
  GitPullRequest, 
  Star, 
  ExternalLink 
} from 'lucide-react';
import './Activity.css';

const username = 'yashKappa';
const followersAPI = `https://api.github.com/users/${username}/followers`;
const eventsAPI = `https://api.github.com/users/${username}/events/public`;

const Activity = () => {
  const [followers, setFollowers] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [followersRes, eventsRes] = await Promise.all([
          fetch(followersAPI),
          fetch(eventsAPI)
        ]);

        if (followersRes.ok) {
          const followersData = await followersRes.json();
          setFollowers(followersData);
        }

        if (eventsRes.ok) {
          const eventsData = await eventsRes.json();
          setEvents(eventsData.slice(0, 5));
        }
      } catch (err) {
        console.error('Error fetching GitHub activity data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function to format raw GitHub event names into clean human-readable text & icons
  const formatEvent = (type) => {
    switch (type) {
      case 'PushEvent':
        return { label: 'Pushed Commits', icon: <GitCommit size={14} className="neu-icon-cyan" /> };
      case 'PullRequestEvent':
        return { label: 'Pull Request', icon: <GitPullRequest size={14} className="neu-icon-green" /> };
      case 'WatchEvent':
        return { label: 'Starred Repository', icon: <Star size={14} className="neu-icon-amber" /> };
      case 'CreateEvent':
        return { label: 'Created Branch/Repo', icon: <ActivityIcon size={14} className="neu-icon-purple" /> };
      default:
        return { label: type.replace('Event', ''), icon: <ActivityIcon size={14} /> };
    }
  };

  return (
    <section id="Activity" className="neu-activity-section">
      <div className="neu-activity-container">
        
        {/* Section Header */}
        <div className="neu-activity-header">
          <div className="neu-status-badge">
            <span className="neu-pulse-dot"></span>
            <i className="fa-brands fa-github neu-icon-accent"></i>
            <span>REAL-TIME METRICS // GITHUB METRICS</span>
          </div>

          <h2 className="neu-activity-title">GitHub Activity & Stats</h2>
          <p className="neu-activity-subtitle">
            Open-source statistics, contribution telemetry, recent activity logs, and earned community achievements.
          </p>
        </div>

        {/* 1. Followers Strip Section */}
        {followers.length > 0 && (
          <motion.div 
            className="neu-card neu-followers-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="neu-card-header">
              <Users size={18} className="neu-icon-accent" />
              <h3>GitHub Followers ({followers.length})</h3>
            </div>
            
            <div className="neu-followers-scroll">
              {followers.map((follower) => (
                <a
                  key={follower.id}
                  href={follower.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-follower-pill"
                  title={`View ${follower.login}'s Profile`}
                >
                  <img
                    src={follower.avatar_url}
                    alt={follower.login}
                    className="neu-follower-avatar"
                  />
                  <span className="neu-follower-name">@{follower.login}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* 2. Primary Stats Grid (Streak + Language Breakdown) */}
        <div className="neu-stats-grid">
          
          {/* GitHub Streak Stat */}
          <motion.div 
            className="neu-card neu-stat-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="neu-card-header">
              <ActivityIcon size={18} className="neu-icon-accent" />
              <h3>Contribution Streak</h3>
            </div>
            <div className="neu-embed-frame">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true`}
                alt="GitHub Streak Stats"
                className="neu-embed-img"
              />
            </div>
          </motion.div>

          {/* Repos Per Language */}
          <motion.div 
            className="neu-card neu-stat-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="neu-card-header">
              <ActivityIcon size={18} className="neu-icon-accent" />
              <h3>Repos Per Language</h3>
            </div>
            <div className="neu-embed-frame">
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=dark`}
                alt="Repos Per Language"
                className="neu-embed-img"
              />
            </div>
          </motion.div>

          {/* Most Commit Language */}
          <motion.div 
            className="neu-card neu-stat-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="neu-card-header">
              <ActivityIcon size={18} className="neu-icon-accent" />
              <h3>Most Commit Language</h3>
            </div>
            <div className="neu-embed-frame">
              <img
                src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=dark`}
                alt="Most Commit Language"
                className="neu-embed-img"
              />
            </div>
          </motion.div>

        </div>

        {/* 3. GitHub Activity Profile Card (Full Width) */}
        <motion.div 
          className="neu-card neu-full-card"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="neu-card-header">
            <ActivityIcon size={18} className="neu-icon-accent" />
            <h3>Profile Telemetry & Details</h3>
          </div>
          <div className="neu-embed-frame">
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=dark`}
              alt="Profile Details"
              className="neu-embed-img"
            />
          </div>
        </motion.div>

        {/* 4. Trophies & Achievements Grid */}
        <div className="neu-awards-grid">
          
          {/* Trophies */}
          <motion.div 
            className="neu-card neu-awards-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <div className="neu-card-header">
              <Trophy size={18} className="neu-icon-amber" />
              <h3>GitHub Trophies</h3>
            </div>
            <div className="neu-embed-frame neu-trophy-frame">
              <img
                src={`https://trophygithubreadmelang.cybee.dpdns.org/?username=${username}`}
                alt="GitHub Trophies"
                className="neu-embed-img"
              />
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            className="neu-card neu-achievements-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="neu-card-header">
              <Award size={18} className="neu-icon-purple" />
              <h3>Badges & Achievements</h3>
            </div>
            <div className="neu-badge-box">
              <div className="neu-badge-item">
                <img 
                  src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" 
                  alt="Pull Shark Badge" 
                  className="neu-badge-img"
                />
                <span className="neu-badge-title">Pull Shark</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 5. Live GitHub Recent Events Stream */}
        {events.length > 0 && (
          <motion.div 
            className="neu-card neu-events-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <div className="neu-card-header">
              <GitCommit size={18} className="neu-icon-accent" />
              <h3>Recent GitHub Events</h3>
            </div>

            <div className="neu-events-list">
              {events.map((event) => {
                const eventDetails = formatEvent(event.type);
                return (
                  <div key={event.id} className="neu-event-item">
                    <div className="neu-event-left">
                      <div className="neu-event-icon-box">
                        {eventDetails.icon}
                      </div>
                      <div className="neu-event-info">
                        <span className="neu-event-type">{eventDetails.label}</span>
                        <a
                          href={`https://github.com/${event.repo.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neu-event-repo"
                        >
                          {event.repo.name} <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                    <span className="neu-event-time">
                      {new Date(event.created_at).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Activity;