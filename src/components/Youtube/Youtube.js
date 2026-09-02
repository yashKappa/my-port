import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Play, ChevronDown, ChevronUp } from "lucide-react";
import "./Youtube.css";

const videos = [
  {
    id: "g6mzdzzqv1w",
    title: "Create A Responsive Menu Bar Using HTML And CSS",
    link: "https://youtu.be/g6mzdzzqv1w",
    date: "Feb 16, 2025",
    duration: "8:45",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/1.jpg`,
  },
  {
    id: "t1AkzNuR630",
    title: "Create Responsive Navbar Using HTML and CSS",
    link: "https://youtu.be/t1AkzNuR630",
    date: "14 Feb 2025",
    duration: "17:20",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/2.jpg`,
  },
  {
    id: "cDn_qpqegeE",
    title: "Create Firebase Database",
    link: "https://youtu.be/cDn_qpqegeE",
    date: "14 Nov 2024",
    duration: "03:21",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/3.png`,
  },
  {
    id: "pRXX_IU5p9w",
    title: "How To Install Live Server and Use in VSCode | Step-by-Step Guide",
    link: "https://youtu.be/pRXX_IU5p9w",
    date: "13 Oct 2024",
    duration: "04:26",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/4.webp`,
  },
  {
    id: "t1AkzNuR630_mysql",
    title:
      "How To Create MYSQL Database And Table using (With Query & Without Query)",
    link: "https://youtu.be/t1AkzNuR630",
    date: "9 Oct 2024",
    duration: "04:21",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/5.webp`,
  },
  {
    id: "_G5tRoBl2Qo",
    title:
      "Data Fetching From MYSQL database Using Node.js and HTML, CSS, JavaScript",
    link: "https://youtu.be/_G5tRoBl2Qo",
    date: "7 Oct 2024",
    duration: "11:48",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/6.jpg`,
  },
  {
    id: "nml8xwNLQcU",
    title: "Create Responsive Navbar Using HTML and CSS",
    link: "https://youtu.be/nml8xwNLQcU",
    date: "5 Oct 2024",
    duration: "19:55",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/7.jpg`,
  },
  {
    id: "tUUlHNZkduk",
    title:
      "Create a Reset Password Page with Authorized User And Email Using HTML, CSS, JavaScript, And Node.js",
    link: "https://youtu.be/tUUlHNZkduk",
    date: "22 Sept 2024",
    duration: "22:46",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/8.jpg`,
  },
  {
    id: "iVL5wWBu9l8",
    title: "Login Page With Cookies and Auto Login",
    link: "https://youtu.be/iVL5wWBu9l8",
    date: "14 Sept 2024",
    duration: "24:25",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/9.webp`,
  },
  {
    id: "ZsquCR5da6Y",
    title:
      "Simple Sign-UP Page With MYSQL Database Connection Using JavaScript",
    link: "https://youtu.be/ZsquCR5da6Y",
    date: "9 Sept 2024",
    duration: "17:29",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/10.webp`,
  },
  {
    id: "gK4ba4mWzOM",
    title: "Create Simple Sign-In (Login) Page Using HTML & CSS",
    link: "https://youtu.be/gK4ba4mWzOM",
    date: "4 Sept 2024",
    duration: "13:55",
    thumbnail: `${process.env.PUBLIC_URL}/youtube/11.jpg`,
  },
];

const Youtube = () => {
  // Option 2: State to limit initial visible videos to 6
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    const youtubeSection = document.getElementById("Youtube");
    if (youtubeSection) {
      youtubeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="Youtube" className="neu-youtube-section">
      <div className="neu-youtube-container">
        {/* Header Section */}
        <div className="neu-youtube-header">
          <div className="neu-status-badge">
            <span className="neu-pulse-dot red"></span>
            <i className="fa-brands fa-youtube neu-icon-red"></i>
            <span>TUTORIALS // YOUTUBE CHANNEL</span>
          </div>

          <h2 className="neu-youtube-title">Video Content</h2>
          <p className="neu-youtube-subtitle">
            Hands-on programming tutorials, web development walkthroughs, and
            technical guides.
          </p>
        </div>

        {/* Video Card Grid */}
        <div className="neu-youtube-grid">
          {videos.slice(0, visibleCount).map((video, index) => (
            <motion.div
              key={`${video.id}-${index}`}
              className="neu-video-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Thumbnail Container with Inset Neumorphic Frame */}
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-video-thumbnail-box"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="neu-video-img"
                />
                <div className="neu-play-overlay">
                  <div className="neu-play-btn">
                    <Play size={20} fill="currentColor" />
                  </div>
                </div>
                <span className="neu-duration-tag">
                  <Clock size={12} /> {video.duration}
                </span>
              </a>

              {/* Video Information Body */}
              <div className="neu-video-body">
                <h3 className="neu-video-card-title">
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {video.title}
                  </a>
                </h3>

                <div className="neu-video-meta">
                  <span className="neu-meta-item">
                    <Calendar size={13} />
                    <span>{video.date}</span>
                  </span>
                </div>

                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn neu-btn-red neu-btn-sm"
                >
                  <i className="fa-brands fa-youtube"></i>
                  <span>Watch Tutorial</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less Controls */}
        {videos.length > 6 && (
          <div className="neu-load-more-wrapper">
            {visibleCount < videos.length ? (
              <button className="neu-btn neu-btn-load" onClick={handleLoadMore}>
                <span>
                  Load More Videos ({videos.length - visibleCount} Remaining)
                </span>
                <ChevronDown size={18} />
              </button>
            ) : (
              <button className="neu-btn neu-btn-load" onClick={handleShowLess}>
                <span>Show Less</span>
                <ChevronUp size={18} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Youtube;
