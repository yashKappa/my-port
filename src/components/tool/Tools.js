import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cpu, Layers, Code, Code2  } from 'lucide-react';
import './Tools.css';

const toolsData = [
  { label: 'HTML5', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', category: 'Frontend' },
  { label: 'CSS3', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', category: 'Frontend' },
  { label: 'JavaScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', category: 'Language' },
  { label: 'React.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', category: 'Frontend' },
  { label: 'Bootstrap', src: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png', category: 'Styling' },
  { label: 'Node.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', category: 'Backend' },
  { label: 'Firebase', src: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', category: 'Cloud & DB' },
  { label: 'MongoDB', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', category: 'Database' },
  { label: 'Flutter', src: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg', category: 'Mobile Dev' },
  { label: 'GitHub', src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', category: 'Version Control' },
  { label: 'VS Code', src: 'https://code.visualstudio.com/assets/favicon.ico', category: 'IDE' },
];

const Tools = () => {
  return (
    <section id="tools" className="neu-tools-section">
      <div className="neu-tools-container">
        
        {/* Header Section */}
        <div className="neu-tools-header">
          {/* Status Badge (Inset Soft Pill) */}
          <div className="neu-status-badge">
            <span className="neu-pulse-dot"></span>
            <Cpu size={15} className="neu-icon-accent" />
            <span>DEVELOPMENT STACK // ACTIVE TOOLKIT</span>
          </div>

          <h2 className="neu-tools-title">Tools &amp; Technologies</h2>
          <p className="neu-tools-subtitle">
            Crafting efficient, scalable applications using modern web and mobile ecosystems.
          </p>

          {/* Quick Stats Grid */}
          <div className="neu-tools-stats">
            <div className="neu-stat-pill">
              <div className="neu-icon-box">
                <Code size={18} className="neu-icon cyan" />
              </div>
              <span>Frontend &amp; Styling</span>
            </div>
            
            <div className="neu-stat-pill">
              <div className="neu-icon-box">
                <Layers size={18} className="neu-icon purple" />
              </div>
              <span>Backend &amp; Databases</span>
            </div>

            <div className="neu-stat-pill">
              <div className="neu-icon-box">
                <Wrench size={18} className="neu-icon amber" />
              </div>
              <span>Mobile &amp; DevOps</span>
            </div>
          </div>
        </div>

        {/* Tools Cards Grid */}
        <div className="neu-tools-grid">
          {toolsData.map(({ label, src, category }, index) => (
            <motion.div
              key={index}
              className="neu-tool-card neu-card-interactive"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Inset Soft Icon Container */}
              <div className="neu-tool-icon-wrapper">
                <img className="neu-tool-img" src={src} alt={label} />
              </div>

              {/* Tool Meta Info */}
              <div className="neu-tool-info">
                <h4 className="neu-tool-name">{label}</h4>
                <span className="neu-tool-category">{category}</span>
              </div>

              <div className="neu-tool-sparkle">
  <Code2 size={14} />
</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tools;