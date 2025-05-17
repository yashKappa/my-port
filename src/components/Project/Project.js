import React, { useEffect, useState } from 'react';
import './Project.css';

const Project = () => {
  const [repos, setRepos] = useState([]);

  const userReposUrl = 'https://api.github.com/users/yashKappa/repos';
const token = process.env.REACT_APP_GITHUB_TOKEN;

  const fetchReadmeImage = async (repoName, repoUrl) => {
    try {
      const readmeUrl = `${repoUrl}/contents/README.md`;
      const response = await fetch(readmeUrl, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch README');

      const data = await response.json();
      const content = atob(data.content);
      const regex = /!\[.*\]\((.*?)\)/g;
      const matches = content.match(regex);

      if (matches) {
        return matches.map((match) => {
          const imageUrl = match.match(/\((.*?)\)/)[1];
          return imageUrl.startsWith('http')
            ? imageUrl
            : `${repoUrl.replace('api.github.com', 'raw.githubusercontent.com').replace('/repos/', '/')}/main/${imageUrl}`;
        });
      }

      return [];
    } catch (error) {
      console.error('Error fetching README image:', error);
      return [];
    }
  };

  console.log("Token from env:", process.env.REACT_APP_GITHUB_TOKEN);


fetch("https://api.github.com/users/yashKappa/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

  
  const fetchRepos = async () => {
    try {
      const response = await fetch(userReposUrl, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch repositories');

      const data = await response.json();
      const reposWithImages = await Promise.all(
        data.map(async (repo) => {
          const images = await fetchReadmeImage(repo.name, repo.url);
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
            ref={(el) => (repo.backRef = el)}
            onMouseLeave={() => {
              if (repo.backRef) repo.backRef.scrollTop = 0;
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
