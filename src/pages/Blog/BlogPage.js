/**
 * FIXED VERSION - src/pages/Blog/BlogPage.js
 * REPLACE YOUR CURRENT FILE WITH THIS
 */

import React, { useState } from 'react';
import { getAllPosts, getBlogCategories } from '../../data/blog';
import BlogCard from '../../components/features/Blog/BlogCard';
import './BlogPage.css';

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allPosts = getAllPosts();
  const categories = ['all', ...getBlogCategories()];

  const filteredPosts = selectedCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      <section className="blog-page__hero">
        <div className="container">
          <h1>Blog & Insights</h1>
          <p>Latest news, tutorials, and insights from the Prodvestor team</p>
        </div>
      </section>

      <section className="blog-page__content">
        <div className="container">
          <div className="blog-page__filters">
            {categories.map(category => (
              <button
                key={category}
                className={`blog-page__filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>

          <div className="blog-page__grid">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;