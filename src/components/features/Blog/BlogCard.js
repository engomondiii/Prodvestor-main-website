/**
 * PRODVESTOR WEBSITE - BLOG CARD COMPONENT
 * FILE LOCATION: src/components/features/Blog/BlogCard.js
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../common/Card';
import Badge from '../../common/Badge';
import './BlogCard.css';

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card-link">
      <Card variant="elevated" hoverable padding="none" className="blog-card">
        {post.image && (
          <Card.Image src={post.image} alt={post.title} />
        )}

        <div className="blog-card__content">
          <div className="blog-card__header">
            <Badge variant="primary" size="small">
              {post.category}
            </Badge>
            <span className="blog-card__date">{post.date}</span>
          </div>

          <Card.Title>{post.title}</Card.Title>
          
          <Card.Text>{post.excerpt}</Card.Text>

          {post.author && (
            <div className="blog-card__author">
              {post.author.avatar && (
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="blog-card__author-avatar"
                />
              )}
              <div className="blog-card__author-info">
                <span className="blog-card__author-name">
                  {post.author.name}
                </span>
                <span className="blog-card__read-time">
                  {post.readTime} min read
                </span>
              </div>
            </div>
          )}

          <div className="blog-card__footer">
            <span className="blog-card__link">
              Read More →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default BlogCard;