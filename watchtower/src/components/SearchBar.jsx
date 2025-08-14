import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    if (!query) return;
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: { api_key: 'YOUR_API_KEY', query },
    });
    setMovies(response.data.results);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && fetchMovies()}
      />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
