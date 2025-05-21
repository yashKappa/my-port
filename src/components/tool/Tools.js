import React from 'react';
import { motion } from 'framer-motion';
import './Tools.css';

const images = [
  { label: 'HTML', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { label: 'CSS', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
  { label: 'JavaScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { label: 'ReactJS', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { label: 'Bootstrap', src: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
  { label: 'Node.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { label: 'Firebase', src: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
  { label: 'MongoDB', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { label: 'Flutter', src: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
  { label: 'GitHub', src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { label: 'VS Code', src: 'https://code.visualstudio.com/assets/favicon.ico' },
];


const Tools = () => {
  return (
    <section id="tools" className="tools-section">
      <h2>Tools & Technologies</h2>
      <div className="tools-grid">
        {images.map(({ label, src }, index) => (
          <motion.div
            key={index}
            className="tool-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <img className='img' src={src} alt={label} />
            <p>{label}</p>
            <img className='shadow' alt='shadow' src={`${process.env.PUBLIC_URL}/shadow1.png`} />
          </motion.div>
        ))}
      </div>


    </section>
  );
};

export default Tools;
