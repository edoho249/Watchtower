import React, { useRef, useEffect } from 'react';
import '../styles/Trending.css';

const movies = [
  { id: 1, title: 'Extraction 2', image: 'https://m.media-amazon.com/images/M/MV5BNTQzM2.jpg' },
  { id: 2, title: 'The Gray Man', image: 'https://m.media-amazon.com/images/M/MV5BZmU3N2.jpg' },
  { id: 3, title: 'Red Notice', image: 'https://m.media-amazon.com/images/M/MV5BYjQxNm.jpg' },
  { id: 4, title: '6 Underground', image: 'https://m.media-amazon.com/images/M/MV5BMzU1Z.jpg' },
  { id: 5, title: 'Spider-Man: No Way Home', image: 'https://m.media-amazon.com/images/M/MV5BMmEzM.jpg' },
  { id: 6, title: 'Jumanji: The Next Level', image: 'https://m.media-amazon.com/images/M/MV5BYjk1Z.jpg' },
  { id: 7, title: 'Black Adam', image: 'https://m.media-amazon.com/images/M/MV5BZjgzN.jpg' },
];

const Trending = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trending-section">
      <h2 className="section-title">Trending Now</h2>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&#10094;</button>
        <div className="trending-list" ref={scrollRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <p className="movie-title">{movie.title}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>&#10095;</button>
      </div>
    </div>
  );
};

export default Trending;
