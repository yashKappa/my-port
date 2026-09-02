import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Eye } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  // FlowCV Web View Link
  const flowCvUrl = 'https://flowcv.com/resume/q2kp2sijlidc';

  // Local static file in public folder (e.g., public/Yash_Saundalkar_Resume.pdf)
  // Or direct CDN image URL if hosted elsewhere
  const resumeDownloadPath = `${process.env.PUBLIC_URL}/resume.pdf`; 
  const resumePreviewImage = `${process.env.PUBLIC_URL}/resume-preview.png`;

  return (
    <section id="Resume" className="neu-resume-section">
      <div className="neu-resume-container">
        
        {/* Section Header */}
        <div className="neu-resume-header">
          <div className="neu-status-badge">
            <span className="neu-pulse-dot"></span>
            <span className="neu-badge-text">CURRICULUM VITAE // PROFESSIONAL PROFILE</span>
          </div>
          <h2 className="neu-resume-title">Resume & Qualifications</h2>
          <p className="neu-resume-subtitle">
            Overview of technical expertise, academic background, project history, and practical experience.
          </p>
        </div>

        {/* Resume Card Container */}
        <motion.div 
          className="neu-card neu-resume-card"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="neu-card-header">
            <FileText size={20} className="neu-icon-accent" />
            <h3>Resume Preview</h3>
          </div>

          {/* Action Bar */}
          <div className="neu-resume-actions">
            <a
              href={flowCvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-btn neu-btn-outline"
            >
              <Eye size={16} />
              <span>View Online (FlowCV)</span>
              <ExternalLink size={14} className="neu-icon-muted" />
            </a>

            <a
              href={resumeDownloadPath}
              download="Yash_Saundalkar_Resume.pdf"
              className="neu-btn neu-btn-primary"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Preview Image / Frame */}
          <div className="neu-resume-frame">
            <img
              src={resumePreviewImage}
              alt="Yash Saundalkar Resume Preview"
              className="neu-resume-img"
              onError={(e) => {
                // Fallback image / placeholder if local asset isn't added yet
                e.target.src = 'https://via.placeholder.com/800x1050/18181b/e1e1e6?text=Resume+Preview+Image';
              }}
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Resume;