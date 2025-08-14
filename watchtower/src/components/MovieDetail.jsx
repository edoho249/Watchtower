import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: { api_key: 'YOUR_API_KEY' },
      });
      setMovie(response.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p className="loading">Loading...</p>;

  return (
    <div className="movie-detail">
      <Link to="/" className="back-button">← Back to Home</Link>
      <div className="movie-detail-content">
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
