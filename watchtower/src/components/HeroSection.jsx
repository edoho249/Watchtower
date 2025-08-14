import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';

const movies = [
  {
 title: "Tenet",
    image: "https://image.tmdb.org/t/p/original/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  },
  {
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    title: "Black Panther",
    image: "https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  },
  {
    title: "Joker",
    image: "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  }
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${movies[index].image})`,
      }}
    >
      <div className="overlay">
        <h1 className="movie-title">{movies[index].title}</h1>
        <div className="buttons">
          <button className="play-btn">▶ Play</button>
          <button className="list-btn">+ My List</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
