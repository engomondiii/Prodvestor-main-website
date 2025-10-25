/**
 * PRODVESTOR WEBSITE - BLOG POST COMPONENT
 * FILE LOCATION: src/components/features/Blog/BlogPost.js
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostBySlug, getRelatedPosts } from '../../../data/blog';
import Badge from '../../common/Badge';
import BlogCard from './BlogCard';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(post.id, 3) : [];

  if (!post) {
    return (
      <div className="blog-post blog-post--not-found">
        <div className="container">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="blog-post__back-link">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      {/* Hero */}
      <section className="blog-post__hero">
        <div className="container">
          <Link to="/blog" className="blog-post__back">
            ← Back to Blog
          </Link>

          <div className="blog-post__header">
            <Badge variant="primary">{post.category}</Badge>
            <h1 className="blog-post__title">{post.title}</h1>
            
            <div className="blog-post__meta">
              {post.author && (
                <div className="blog-post__author">
                  {post.author.avatar && (
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="blog-post__author-avatar"
                    />
                  )}
                  <span className="blog-post__author-name">
                    {post.author.name}
                  </span>
                </div>
              )}
              <span className="blog-post__date">{post.date}</span>
              <span className="blog-post__read-time">
                {post.readTime} min read
              </span>
            </div>
          </div>

          {post.image && (
            <div className="blog-post__featured-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="blog-post__content">
        <div className="container">
          <article className="blog-post__article">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                <p>{post.excerpt}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <h2>Key Takeaways</h2>
                <ul>
                  <li>Important point about the topic</li>
                  <li>Another crucial insight</li>
                  <li>Final key consideration</li>
                </ul>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident.
                </p>
              </>
            )}
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="blog-post__tags">
              <h3>Tags:</h3>
              <div className="blog-post__tags-list">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="blog-post__related">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="blog-post__related-grid">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogPost;