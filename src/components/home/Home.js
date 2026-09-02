import React from 'react';
import { 
  Terminal, 
  Code2, 
  Rocket, 
  MessageSquare, 
  GraduationCap, 
  Briefcase, 
  Download, 
  ExternalLink 
} from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="neu-home-section">
      <div className="neu-container">
        
        {/* Left Side: Info & Bio */}
        <div className="neu-content-left">
          
          {/* Status Badge (Inset Soft Pill) */}
          <div className="neu-status-badge">
            <span className="neu-pulse-dot"></span>
            <Terminal size={15} className="neu-icon-accent" />
            <span>SYSTEM ONLINE // READY TO BUILD</span>
          </div>

          <h1 className="neu-intro">Hello, myself</h1>
          <h2 className="neu-name">Yash Saundalkar</h2>

          {/* Title Bar Pill */}
          <div className="neu-title-bar">
            <span className="neu-role">Full-Stack Developer</span>
            <span className="neu-divider">•</span>
            <span className="neu-role highlight">M.Sc. IT Scholar</span>
          </div>

          {/* Highlights Cards Grid */}
          <div className="neu-highlights">
            <div className="neu-card-l neu-card-interactive">
              <div className="neu-icon-box">
                <Code2 size={20} className="neu-icon cyan" />
              </div>
              <p>Working on <strong>ReactJS & Full-Stack Web Dev</strong></p>
            </div>

            <div className="neu-card-l neu-card-interactive">
              <div className="neu-icon-box">
                <Rocket size={20} className="neu-icon purple" />
              </div>
              <p>Passionate about <strong>open-source & cool builds</strong></p>
            </div>

            <div className="neu-card-l neu-card-interactive">
              <div className="neu-icon-box">
                <MessageSquare size={20} className="neu-icon green" />
              </div>
              <p>Ask me about <strong>Web & Mobile Development</strong></p>
            </div>

            <div className="neu-card-l neu-card-interactive">
              <div className="neu-icon-box">
                <Briefcase size={20} className="neu-icon amber" />
              </div>
              <p>Actively seeking <strong>Software Dev Opportunities</strong></p>
            </div>

            <div className="neu-card-l neu-card-interactive">
              <div className="neu-icon-box">
                <GraduationCap size={20} className="neu-icon pink" />
              </div>
              <p><strong>B.Sc. IT Graduate</strong> | Pursuing M.Sc. IT</p>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="neu-cta-group">
            <a href="#projects" className="neu-btn neu-btn-primary">
              <span>View Projects</span>
              <ExternalLink size={16} />
            </a>
            <a href="#contact" className="neu-btn neu-btn-secondary">
              <span>Contact Me</span>
              <Download size={16} />
            </a>
          </div>
        </div>

        {/* Right Side: Image Frame & Soft Badges */}
        <div className="neu-content-right">
          <div className="neu-avatar-frame">
            <div className="neu-image-wrapper">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/coding-illustration-download-in-svg-png-gif-file-formats--html-logo-source-code-programming-interface-web-development-webapp-and-pack-design-illustrations-3783951.png"
                alt="Developer Illustration"
                className="neu-hero-img"
              />
            </div>

            {/* Floating Badges */}
            <div className="neu-tag tag-1">
              <span className="tag-dot cyan"></span> React.js
            </div>
            <div className="neu-tag tag-2">
              <span className="tag-dot green"></span> Full Stack
            </div>
            <div className="neu-tag tag-3">
              <code>&lt;Developer /&gt;</code>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;