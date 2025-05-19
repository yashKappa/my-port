import React from 'react';
import Slider from 'react-slick';
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
  mainCharacter: 'Son Goku',
}

];

const Hobbies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section id='Hobbies' className='p-4'>
      <h2 className='font-bold mb-4'>Hobbies</h2>
      <h3 className='font-bold mb-4'>Watching Anime</h3>
      <Slider {...settings}>
        {animeList.map((anime, index) => (
          <div key={index} className='container text-center'>
            <img
              src={anime.image}
              alt={anime.title}
              className='img-fluid mx-auto'
              style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '12px' }}
            />
            <div className='data mt-3'>
              <h3 className='text-xl font-semibold'>{anime.title}</h3>
              <p><strong>About:</strong> {anime.about}</p>
              <p><strong>Genre:</strong> {anime.genre}</p>
              <p><strong>Episodes:</strong> {anime.episodes}</p>
              <p><strong>Rating:</strong> {anime.rating}</p>
              <p><strong>Main Character:</strong> {anime.mainCharacter}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hobbies;
