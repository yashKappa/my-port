import React, { useEffect, useState } from 'react';
import './Project.css';

const Project = () => {
  const [repos, setRepos] = useState([]);

  const userReposUrl = 'https://api.github.com/users/yashKappa/repos';

  const fetchReadmeImage = async (repoUrl) => {
    try {
      const readmeUrl = `${repoUrl}/contents/README.md`;
      const response = await fetch(readmeUrl);

      if (!response.ok) throw new Error('Failed to fetch README');

      const data = await response.json();
      const content = atob(data.content);

      const regex = /!\[.*?\]\((.*?)\)/g;
      const matches = [...content.matchAll(regex)];

      if (matches.length > 0) {
        return matches.map(match => {
          const imageUrl = match[1];
          return imageUrl.startsWith('http')
            ? imageUrl
            : `${repoUrl.replace('api.github.com/repos', 'raw.githubusercontent.com')}/main/${imageUrl}`;
        });
      }

      return [];
    } catch (error) {
      console.error('Error fetching README image:', error);
      return [];
    }
  };

  const fetchRepos = async () => {
    try {
      const response = await fetch(userReposUrl);

      if (!response.ok) throw new Error('Failed to fetch repositories');

      const data = await response.json();

      // For each repo, fetch images from README.md
      const reposWithImages = await Promise.all(
        data.map(async (repo) => {
          const images = await fetchReadmeImage(repo.url);
          return { ...repo, images };
        })
      );

      setRepos(reposWithImages);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <section id="Project" className="scroll-section tools-section">
      <h2>Project</h2>
      <div className="Project">
        <div className="repo-container">
          {repos.length === 0 && <p>Loading repositories...</p>}
          {repos.map((repo) => {
            const websiteUrl = repo.homepage || `https://yashkappa.github.io/${repo.name}`;

            return (
              <div className="repo-card" key={repo.id}>
                <div className="card-inner">
                  <div className="card-front">
                    {repo.images && repo.images.length > 0 ? (
                      <img
                        src={repo.images[0]}
                        alt={`Screenshot of ${repo.name}`}
                        className="repo-image"
                      />
                    ) : (
                      <p className="no-image">No image</p>
                    )}
                  </div>
                  <div
                    className="card-back"
                    onMouseLeave={(e) => {
                      e.currentTarget.scrollTop = 0;
                    }}
                  >
                    <h3>{repo.name}</h3>
                    <p><strong>Description:</strong> {repo.description || 'No description'}</p>
                    <p><strong>Site:</strong> <a href={websiteUrl} target="_blank" rel="noopener noreferrer">{websiteUrl}</a></p>
                    <p><strong>Stars:</strong> {repo.stargazers_count}</p>
                    <p><strong>Forks:</strong> {repo.forks_count}</p>
                    <p><strong>Visit:</strong> <a href={repo.html_url} target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
