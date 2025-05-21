import React, { useEffect, useState } from 'react';
import Home from './components/home/Home';
import Tools from './components/tool/Tools';
import Project from './components/Project/Project';
import Youtube from './components/Youtube/Youtube';
import Activity from './components/Activity/Activity';
import Resume from './components/Resume/Resume';
import Hobbies from './components/Hobbies/Hobbies';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
    <div className="body">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#home">My Portfolio</a>
          <button className="navbar-toggler" type="button" onClick={() => setSidebarOpen(true)}>
            <i class="fa-solid fa-bars"></i>
          </button>

          <div id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home">🏠 Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'tools' ? 'active' : ''}`} href="#tools">🛠️ Tools</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'Project' ? 'active' : ''}`} href="#Project">💻 Projects</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'Youtube' ? 'active' : ''}`} href="#Youtube">📺 Youtube</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'Activity' ? 'active' : ''}`} href="#Activity">📈 Activity</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'Hobbies' ? 'active' : ''}`} href="#Hobbies">🎨 Hobbies</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'Resume' ? 'active' : ''}`} href="#Resume">📋 Resume</a>
              </li>
              <li className="nav-item">
                <a className='nav-link git' href="https://github.com/yashKappa"><i className="fa-brands fa-github"></i> GitHub</a>
              </li>
            </ul>
          </div>
          {/* Slide-in Sidebar */}
          <div className={`custom-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>×</button>
            <ul className="sidebar-links">
              <li><a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home" onClick={() => setSidebarOpen(false)}>🏠 Home</a></li>
              <li><a className={`nav-link ${activeSection === 'tools' ? 'active' : ''}`} href="#tools" onClick={() => setSidebarOpen(false)}>🛠️ Tools</a></li>
              <li><a className={`nav-link ${activeSection === 'Project' ? 'active' : ''}`} href="#Project" onClick={() => setSidebarOpen(false)}>💻 Projects</a></li>
              <li><a className={`nav-link ${activeSection === 'Youtube' ? 'active' : ''}`} href="#Youtube" onClick={() => setSidebarOpen(false)}>📺 YouTube</a></li>
              <li><a className={`nav-link ${activeSection === 'Activity' ? 'active' : ''}`} href="#Activity" onClick={() => setSidebarOpen(false)}>📈 Activity</a></li>
              <li><a className={`nav-link ${activeSection === 'Hobbies' ? 'active' : ''}`} href="#Hobbies" onClick={() => setSidebarOpen(false)}>🎨 Hobbies</a></li>
              <li><a className={`nav-link ${activeSection === 'Resume' ? 'active' : ''}`} href="#Resume" onClick={() => setSidebarOpen(false)}>📋 Resume</a></li>
              <li><a className='nav-link git' href="https://github.com/yashKappa" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> GitHub</a></li>
            </ul>
          </div>

        </div>
      </nav>

      {/* Sections */}
      <Home />
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
