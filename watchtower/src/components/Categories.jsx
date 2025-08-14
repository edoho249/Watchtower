import React from 'react';
import '../styles/Categories.css';

const categories = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'];

const Categories = () => {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <div className="category-card" key={cat}>{cat}</div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
