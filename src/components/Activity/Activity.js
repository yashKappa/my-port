import React, { useEffect, useState } from 'react';
import './Activity.css';

const username = 'yashKappa';
const statsBaseURL = 'https://github-readme-stats.vercel.app';
const graphURL = 'https://github-readme-activity-graph.vercel.app';
const followersAPI = `https://api.github.com/users/${username}/followers`;
const eventsAPI = `https://api.github.com/users/${username}/events/public`;

const Activity = () => {
  const [followers, setFollowers] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch followers
    fetch(followersAPI)
      .then(res => res.json())
      .then(data => {
        setFollowers(data);
      })
      .catch(err => console.error("Error fetching followers:", err));

    // Fetch recent events
    fetch(eventsAPI)
      .then(res => res.json())
      .then(data => {
        setEvents(data.slice(0, 5)); // Get 5 most recent events
      })
      .catch(err => console.error("Error fetching events:", err));
  }, []);

  return (
    <section id="Activity" className="scroll-section activity-section">
      <h2>GitHub Activity</h2>

      {followers.length > 0 && (
        <div className="followers-container">
          <h3>👥 Followers</h3>
          <div className="followers-avatars">
            {followers.map((follower) => (
              <div key={follower.id} className="follower-card">
                <a
                  href={follower.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={follower.login}
                >
                  <img
                    src={follower.avatar_url}
                    alt={follower.login}
                    className="follower-avatar"
                  />
                </a>
                <p className="follower-name">{follower.login}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="stats-grid">
        <div className="stat-item">
          <img
            src={`${statsBaseURL}/api?username=${username}&show_icons=true&theme=tokyonight&rank_icon=github&hide_title=false`}
            alt="GitHub Stats"
            className="img-fluid"
          />
        </div>
        <div className="stat-item">
          <img
            src={`${statsBaseURL}/api/top-langs?username=${username}&layout=compact&theme=tokyonight`}
            alt="Top Languages"
            className="img-fluid"
          />
        </div>
        <div className="stat-item contribution-graph">
          <img
            src={`${graphURL}/graph?username=${username}&bg_color=0d1117&color=5bcdec&line=5bcdec&point=ffffff&area=true&hide_border=true`}
            alt="GitHub Contribution Graph"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="stat-item trophy-section">
        <div className='trophy'>
          <h3>🏆 My GitHub Trophies</h3>
          <img
            src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=algolia&margin-w=15&margin-h=15`}
            alt="GitHub Trophies"
            className="img-fluid"
          />
        </div>
      </div>

      {events.length > 0 && (
        <div className="recent-events">
          <h3>📊 GitHub Events (Recent Activity)</h3>
          <ul className="events-list">
            {events.map((event) => (
              <li key={event.id} className="event-item">
                <p>
                  <strong>{event.type}</strong> in{' '}
                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.repo.name}
                  </a>
                </p>
                <p className="event-time">
                  {new Date(event.created_at).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Activity;
