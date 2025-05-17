import React from 'react';
import './Youtube.css';

const videos = [
  {
    id: 'g6mzdzzqv1w',
    title: 'Create A Responsive Menu Bar Using HTML And CSS',
    link: 'https://youtu.be/g6mzdzzqv1w',
    date: 'Feb 16, 2025',
    duration: '8:45',
    thumbnail: '/youtube/1.jpg'
  },
  {
    id: 't1AkzNuR630',
    title: 'Create Responsive Navbar Using HTML and CSS',
    link: 'https://youtu.be/t1AkzNuR630',
    date: '14 Feb 2025',
    duration: '17:20',
    thumbnail: '/youtube/2.jpg'
  },
  {
    id: 't1AkzNuR630',
    title: 'Create Firebase Database',
    link: 'https://youtu.be/cDn_qpqegeE',
    date: '14 Nov 2024',
    duration: '03:21',
    thumbnail: '/youtube/3.png'
  },
  {
    id: 't1AkzNuR630',
    title: 'How To Install Live Server and Use in VSCode | Step-by-Step Guide',
    link: 'https://youtu.be/pRXX_IU5p9w',
    date: '13 Oct 2024',
    duration: '04:26',
    thumbnail: '/youtube/4.webp'
  },
  {
    id: 't1AkzNuR630',
    title: 'How To Create MYSQL Database And Table using (With Query & Without Query)',
    link: 'https://youtu.be/t1AkzNuR630',
    date: '9 Oct 2024',
    duration: '04:21',
    thumbnail: '/youtube/5.webp'
  },
  {
    id: 't1AkzNuR630',
    title: 'Data Fetching From MYSQL database Using Node.js and HTML, CSS, JavaScript',
    link: 'https://youtu.be/_G5tRoBl2Qo',
    date: '7 Oct 2024',
    duration: '11:48',
    thumbnail: '/youtube/6.jpg'
  },
  {
    id: 't1AkzNuR630',
    title: 'Create Responsive Navbar Using HTML and CSS',
    link: 'https://youtu.be/nml8xwNLQcU',
    date: '5 Oct 2024',
    duration: '19:55',
    thumbnail: '/youtube/7.jpg'
  },
  {
    id: 't1AkzNuR630',
    title: 'Create a Reset Password Page with Authorized User And Email Using HTML, CSS, JavaScript, And Node.js',
    link: 'https://youtu.be/tUUlHNZkduk',
    date: '22 Sept 2024',
    duration: '22:46',
    thumbnail: '/youtube/8.jpg'
  },
  {
    id: 't1AkzNuR630',
    title: 'Login Page With Cookies and Auto Login',
    link: 'https://youtu.be/iVL5wWBu9l8',
    date: '14 Sept 2024',
    duration: '24:25',
    thumbnail: '/youtube/9.webp'
  },
  {
    id: 't1AkzNuR630',
    title: 'Simple Sign-UP Page With MYSQL Database Connection Using JavaScript',
    link: 'https://youtu.be/ZsquCR5da6Y',
    date: '9 Sept 2024',
    duration: '17:29',
    thumbnail: '/youtube/10.webp'
  },
  {
    id: 't1AkzNuR630',
    title: 'Create a Reset Password Page with Authorized User And Email Using HTML, CSS, JavaScript, And Node.js',
    link: 'https://youtu.be/tUUlHNZkduk',
    date: '22 Sept 2024',
    duration: '22:46',
    thumbnail: '/youtube/8.jpg'
  },
  {
    id: 't1AkzNuR630',
    title: 'Create Simple Sign-In (Login) Page Using HTML & CSS',
    link: 'https://youtu.be/gK4ba4mWzOM',
    date: '4 Sept 2024',
    duration: '13:55',
    thumbnail: '/youtube/11.jpg'
  },
];

const Youtube = () => {
  return (
    <section id="Youtube" className="scroll-section tools-section">
      <h2>My YouTube Videos</h2>
     <div className='video'>
         <div className='video-container'>
        <div className="video-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="thumbnail"
            />
            <div className="video-info">
              <h3>
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                  {video.title}
                </a>
              </h3>
              <p><strong>Duration:</strong> {video.duration}</p>
              <p><strong>Date:</strong> {video.date}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
     </div>
    </section>
  );
};

export default Youtube;
