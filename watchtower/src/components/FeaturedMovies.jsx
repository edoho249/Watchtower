import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import '../styles/FeaturedMovies.css';

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: { api_key: 'YOUR_API_KEY' },
      });
      setMovies(res.data.results.slice(0, 6));
    };
    fetch();
  }, []);

  return (
    <section className="featured-movies">
      <h2>Featured Movies</h2>
      <div className="grid">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};

export default FeaturedMovies;
