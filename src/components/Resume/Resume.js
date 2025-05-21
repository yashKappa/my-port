import React from 'react';
import './Resume.css';

const Resume = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/Resume.png`;

  return (
    <section id='Resume' className="scroll-section text-center p-4">
      <h2>Resume</h2>
      <img
        alt='resume'
        src={resumeUrl}
        className="img-fluid mb-3"
        
      />
      <br />
      <a
        href={resumeUrl}
        download="My_Resume.png"
        className="btn btn-warning"
      >
        ⬇️ Download Resume
      </a>
    </section>
  );
};

export default Resume;
