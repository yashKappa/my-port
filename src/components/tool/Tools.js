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
  { label: 'Framer Motion', src: 'https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png' },
  { label: 'TypeScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { label: 'EJS', src: 'https://pbs.twimg.com/profile_images/2199543684/ejs_400x400.png' },
  { label: 'Python', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png' },
  { label: 'C++', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' },
  { label: 'Dart', src: 'https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944876.png?f=webp&w=256' },
  { label: 'CMake', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/CMake-logo-triangle-high-res.png/1200px-CMake-logo-triangle-high-res.png' },
  { label: 'C', src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
  { label: 'Swift', src: 'https://developer.apple.com/swift/images/swift-og.png' },
  { label: 'Kotlin', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png' },
  { label: 'Objective-C', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uNin_p1OOe9DFjHY-jcd7SoMhWc-qv_-Yw&s' },
];


const Tools = () => {
  return (
    <section id="tools" className="scroll-section tools-section">
      <h2>Tools Used</h2>
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
         <img className='shadow' alt='shadow' src='shadow1.png' />
          </motion.div>
        ))}
      </div>

      
    </section>
  );
};

export default Tools;
