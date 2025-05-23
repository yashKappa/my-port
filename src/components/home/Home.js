import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="scroll-section home-section">
      <div className='home'>
        <img className='back' alt='back' src="https://wallpapercave.com/wp/wp2757874.gif" />

        <div className="self d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="about">
            <h1 className="intro-text">Hello, myself</h1>
            <h2 className="name-text">Yash Saundalkar</h2>
            <p className="intro-paragraph">
              🔭 Currently working on ReactJS & Full-Stack Web Development <br />
              🚀 Passionate about building cool projects & contributing to open-source <br />
              💬 Ask me anything about Web & Mobile Development <br />
              👀 Actively seeking opportunities in Web Development <br />
              🎓 B.Sc. IT Graduate | Pursuing M.Sc. IT
            </p>
          </div>

          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/coding-illustration-download-in-svg-png-gif-file-formats--html-logo-source-code-programming-interface-web-development-webapp-and-pack-design-illustrations-3783951.png"
            alt="Developer"
            className="img-fluid dev-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
