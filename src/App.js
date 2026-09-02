import React, { useEffect, useState } from 'react';
import Home from './components/home/Home';
import Tools from './components/tool/Tools';
import Project from './components/Project/Project';
import Youtube from './components/Youtube/Youtube';
import Activity from './components/Activity/Activity';
import Resume from './components/Resume/Resume';
import Hobbies from './components/Hobbies/Hobbies';
import './App.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Handle Theme Toggle
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Section Observer for ScrollSpy
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.custom-sidebar');
      const toggleButton = document.querySelector('.navbar-toggler');

      if (
        sidebarOpen &&
        sidebar &&
        !sidebar.contains(event.target) &&
        toggleButton &&
        !toggleButton.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className={`body ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Bootstrap Navbar with Neumorphism */}
      <nav className="navbar navbar-expand-lg sticky-top neu-navbar">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          
          <a className="navbar-brand neu-brand" href="#home">
            <img className="log" alt="logo" src={`${process.env.PUBLIC_URL}/log.ico`} />
            <span>ash.Port</span>
          </a>

          

          <div id="navbarNav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className={`nav-link neu-nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home"><span className='emoji'>🏠</span> <b>Home</b></a>
              </li>
              <li className="nav-item">
                <a className={`nav-link neu-nav-link ${activeSection === 'tools' ? 'active' : ''}`} href="#tools"><span className='emoji'>🛠️</span> <b>Tools</b></a>
              </li>
              <li className="nav-item">
                <a className={`nav-link neu-nav-link ${activeSection === 'Project' ? 'active' : ''}`} href="#Project"><span className='emoji'>💻</span> <b>Projects</b></a>
              </li>
              <li className="nav-item">
                <a className={`nav-link neu-nav-link ${activeSection === 'Youtube' ? 'active' : ''}`} href="#Youtube"><span className='emoji'>📺</span> <b>Youtube</b></a>
              </li>
              <li className="nav-item">
                <a className={`nav-link neu-nav-link ${activeSection === 'Activity' ? 'active' : ''}`} href="#Activity"><span className='emoji'>📈</span> <b>Activity</b></a>
              </li>
              <li className="nav-item">
                <a className={`nav-link neu-nav-link ${activeSection === 'Hobbies' ? 'active' : ''}`} href="#Hobbies"><span className='emoji'>🎨</span> <b>Hobbies</b></a>
              </li>
              <li className="nav-item">
                <a className={`nav-link neu-nav-link ${activeSection === 'Resume' ? 'active' : ''}`} href="#Resume"><span className='emoji'>📋</span> <b>Resume</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link git neu-git-btn" href="https://github.com/yashKappa" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-3 ms-3">
            
            {/* Neumorphic Theme Toggle Icon Button */}
            <button 
              className="neu-btn-icon neu-theme-btn" 
              type="button" 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              <i className={`fa-solid ${darkMode ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>

            <button className="navbar-toggler neu-btn-icon" type="button" onClick={() => setSidebarOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* Slide-in Neumorphic Sidebar */}
{/* Slide-in Neumorphic Sidebar */}
<div className={`custom-sidebar neu-sidebar ${sidebarOpen ? 'open' : ''}`}>
  <button 
    className="close-btn neu-btn-icon" 
    onClick={() => setSidebarOpen(false)}
    aria-label="Close Sidebar"
  >
    <i className="fa-solid fa-xmark"></i>
  </button>

  <ul className="sidebar-links">
    <li><a className={`nav-link neu-nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home" onClick={() => setSidebarOpen(false)}>🏠 Home</a></li>
    <li><a className={`nav-link neu-nav-link ${activeSection === 'tools' ? 'active' : ''}`} href="#tools" onClick={() => setSidebarOpen(false)}>🛠️ Tools</a></li>
    <li><a className={`nav-link neu-nav-link ${activeSection === 'Project' ? 'active' : ''}`} href="#Project" onClick={() => setSidebarOpen(false)}>💻 Projects</a></li>
    <li><a className={`nav-link neu-nav-link ${activeSection === 'Youtube' ? 'active' : ''}`} href="#Youtube" onClick={() => setSidebarOpen(false)}>📺 YouTube</a></li>
    <li><a className={`nav-link neu-nav-link ${activeSection === 'Activity' ? 'active' : ''}`} href="#Activity" onClick={() => setSidebarOpen(false)}>📈 Activity</a></li>
    <li><a className={`nav-link neu-nav-link ${activeSection === 'Hobbies' ? 'active' : ''}`} href="#Hobbies" onClick={() => setSidebarOpen(false)}>🎨 Hobbies</a></li>
    <li><a className={`nav-link neu-nav-link ${activeSection === 'Resume' ? 'active' : ''}`} href="#Resume" onClick={() => setSidebarOpen(false)}>📋 Resume</a></li>
    <li>
      <a className="nav-link git neu-git-btn" href="https://github.com/yashKappa" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i> GitHub
      </a>
    </li>
  </ul>
</div>

        </div>
      </nav>

      {/* Sections */}
      <Home darkMode={darkMode} />
      <Tools />
      <Project />
      <Youtube />
      <Activity />
      <Hobbies />
      <Resume />
    </div>
  );
};

export default App;