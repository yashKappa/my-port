import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Home.css';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.4 });

  return (
    <section id="home" className="scroll-section home-section" ref={ref}>
      {/* Decorative Animated Shapes
      <motion.div
        className="shape shape-1"
        animate={{ y: [0, 15, -15, 0], rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="shape shape-2"
        animate={{ x: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="shape shape-3"
        animate={{ scale: [1, 1.2, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      /> */}

      {/* Main Content */}
   <div className='home'>
          <img className='back' alt='back' src="https://wallpapercave.com/wp/wp2757874.gif" />

       <div className="self d-flex flex-column flex-md-row align-items-center justify-content-between">
        <motion.div
          className="about"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="intro-text">Hello, myself</h1>
          <motion.h2
            className="name-text"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Yash Saundalkar
          </motion.h2>

          <motion.p
            className="intro-paragraph"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          >
            🔭 Currently working on ReactJS & Full-Stack Web Development <br />
            🚀 Passionate about building cool projects & contributing to open-source <br />
            💬 Ask me anything about Web & Mobile Development <br />
            👀 Actively seeking opportunities in Web Development <br />
            🎓 B.Sc. IT Graduate | Pursuing M.Sc. IT
          </motion.p>
        </motion.div>

        <motion.img
          src="https://cdni.iconscout.com/illustration/premium/thumb/coding-illustration-download-in-svg-png-gif-file-formats--html-logo-source-code-programming-interface-web-development-webapp-and-pack-design-illustrations-3783951.png"
          alt="Developer"
          className="img-fluid dev-img"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        />
      </div>
   </div>
<motion.div className="shape circle" />
<motion.div className="shape square" />
<motion.div className="shape triangle" />
<motion.div className="shape rectangle" />
<motion.div className="shape blob" />
<motion.div className="shape diamond" />
<motion.div className="shape hexagon" />
<motion.div className="shape zigzag" />
<motion.div className="shape wave" />
<motion.div className="shape star" />
<motion.div className="shape ring" />
<motion.div className="shape parallelogram" />
<motion.div className="shape circle center-circle" />
<motion.div className="shape hexagon center-hexagon" />
<motion.div className="shape star center-star" />



    </section>
  );
};

export default Home;
