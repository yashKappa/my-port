import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Tv, Palette, Star, Film, User, Tag, Info } from 'lucide-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hobbies.css';

const animeList = [
  {
    title: 'Naruto',
    image: `${process.env.PUBLIC_URL}/Anime/Naruto.jpg`,
    about: 'Naruto Uzumaki, a spirited ninja ostracized by his village for hosting the Nine-Tails demon, dreams of becoming the Hokage — the strongest ninja and village leader. Across Naruto and Naruto Shippuden, he matures through intense battles, builds lasting bonds, and strives for peace in a world torn by war and hatred. The legacy continues in Boruto, where Naruto’s son explores his own path under the shadow of a legendary father.',
    genre: 'Action, Adventure, Shonen',
    episodes: '220 (Naruto) + 500 (Shippuden)',
    rating: '8.3/10',
    mainCharacter: 'Naruto Uzumaki'
  },
  {
    title: 'One Piece',
    image: `${process.env.PUBLIC_URL}/Anime/one piece.webp`,
    about: 'Monkey D. Luffy sets sail with his Straw Hat crew across the vast and dangerous Grand Line, aiming to find the legendary One Piece treasure and become the King of the Pirates. Along the way, he faces tyrants, warlords, and marines, forging unbreakable bonds and shaking the foundations of the world. With themes of freedom, dreams, and loyalty, One Piece is a never-ending voyage of adventure and legacy.',
    genre: 'Adventure, Fantasy, Shonen',
    episodes: '1000+',
    rating: '9.0/10',
    mainCharacter: 'Monkey D. Luffy'
  },
  {
    title: 'Bleach',
    image: `${process.env.PUBLIC_URL}/Anime/Bleach1.jpeg`,
    about: 'Ichigo Kurosaki, a teenager with the ability to see spirits, becomes a Soul Reaper after meeting Rukia Kuchiki. Tasked with protecting the living from evil spirits and guiding souls to the afterlife, Ichigo uncovers hidden powers and ancient secrets. The story intensifies in the Thousand-Year Blood War arc, where Ichigo faces the Quincy king Yhwach in a battle that shakes all realms.',
    genre: 'Supernatural, Action, Shonen',
    episodes: '366 + TYBW Arc',
    rating: '8.2/10',
    mainCharacter: 'Ichigo Kurosaki'
  },
  {
    title: 'Dragon Ball Series',
    image: `https://images.alphacoders.com/764/thumb-1920-764254.png`,
    about: 'Follow the journey of Goku — from his childhood adventures in Dragon Ball, to his legendary battles against powerful foes like Frieza, Cell, and Majin Buu in Dragon Ball Z, and his encounters with gods, multiverse warriors, and cosmic threats in Dragon Ball Super. Across generations, Goku’s pursuit of strength, friendship, and peace shapes the fate of Earth and the universe.',
    genre: 'Action, Martial Arts, Adventure, Fantasy, Shonen',
    episodes: '153 (DB) + 291 (DBZ) + 131 (DBS)',
    rating: '8.7/10',
    mainCharacter: 'Son Goku'
  }
];

const sketches = [
  `${process.env.PUBLIC_URL}/sketch/1.png`,
  `${process.env.PUBLIC_URL}/sketch/2.png`,
  `${process.env.PUBLIC_URL}/sketch/3.png`,
  `${process.env.PUBLIC_URL}/sketch/4.png`
];

const Hobbies = () => {
  const animeSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: false
  };

  const sketchSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section id="Hobbies" className="neu-hobbies-section">
      <div className="neu-hobbies-container">
        
        {/* Section Header */}
        <div className="neu-hobbies-header">
          <div className="neu-status-badge">
            <span className="neu-pulse-dot"></span>
            <span className="neu-badge-text">PERSONAL INTERESTS // CREATIVE HOBBIES</span>
          </div>
          <h2 className="neu-hobbies-title">Hobbies & Passions</h2>
          <p className="neu-hobbies-subtitle">
            Exploring narrative worlds, character dynamics, and translating inspiration into original sketches.
          </p>
        </div>

        {/* 1. Watching Anime Section */}
        <motion.div 
          className="neu-card neu-hobbies-card"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="neu-card-header">
            <Tv size={20} className="neu-icon-accent" />
            <h3>Watching Anime</h3>
          </div>

          <div className="neu-slider-wrapper">
            <Slider {...animeSettings}>
              {animeList.map((anime, index) => (
                <div key={index} className="neu-anime-slide-wrapper">
                  <div className="neu-anime-content">
                    
                    {/* Poster Frame */}
                    <div className="neu-poster-frame">
                      <img
                        src={anime.image}
                        alt={anime.title}
                        className="neu-poster-img"
                        onError={(e) => {
                          // Fallback if local image fails to load
                          e.target.src = 'https://images.alphacoders.com/764/thumb-1920-764254.png';
                        }}
                      />
                      <div className="neu-rating-chip">
                        <Star size={14} className="neu-icon-amber" />
                        <span>{anime.rating}</span>
                      </div>
                    </div>

                    {/* Metadata Box */}
                    <div className="neu-anime-details">
                      <h4 className="neu-anime-name">{anime.title}</h4>
                      
                      <p className="neu-anime-about">
                        <Info size={14} className="neu-icon-inline" />
                        {anime.about}
                      </p>

                      <div className="neu-meta-grid">
                        <div className="neu-meta-item">
                          <Tag size={14} className="neu-icon-accent" />
                          <div>
                            <span className="neu-meta-label">Genre</span>
                            <span className="neu-meta-value">{anime.genre}</span>
                          </div>
                        </div>

                        <div className="neu-meta-item">
                          <Film size={14} className="neu-icon-cyan" />
                          <div>
                            <span className="neu-meta-label">Episodes</span>
                            <span className="neu-meta-value">{anime.episodes}</span>
                          </div>
                        </div>

                        <div className="neu-meta-item">
                          <User size={14} className="neu-icon-purple" />
                          <div>
                            <span className="neu-meta-label">Main Character</span>
                            <span className="neu-meta-value">{anime.mainCharacter}</span>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* 2. Drawing Sketches Section */}
        <motion.div 
          className="neu-card neu-hobbies-card"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="neu-card-header">
            <Palette size={20} className="neu-icon-purple" />
            <h3>Drawing & Sketches</h3>
          </div>

          <div className="neu-slider-wrapper">
            <Slider {...sketchSettings}>
              {sketches.map((src, idx) => (
                <div key={idx} className="neu-sketch-slide-wrapper">
                  <div className="neu-sketch-frame">
                    <img
                      src={src}
                      alt={`Sketch ${idx + 1}`}
                      className="neu-sketch-img"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Sketch+Artwork';
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hobbies;