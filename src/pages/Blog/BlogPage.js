/**
 * PRODVESTOR WEBSITE - BLOG PAGE
 * FILE LOCATION: src/pages/Blog/BlogPage.js
 */

import React from 'react';
import { getAllBlogPosts } from '../../data/blog';
import { BlogCard } from '../../components/features/Blog';
import './BlogPage.css';

function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="blog-page">
      <section className="blog-page__hero">
        <div className="container">
          <h1>Prodvestor Blog</h1>
          <p>Insights, tutorials, and news from the world of technology</p>
        </div>
      </section>

      <section className="blog-page__content">
        <div className="container">
          <div className="blog-page__grid">
            {posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;