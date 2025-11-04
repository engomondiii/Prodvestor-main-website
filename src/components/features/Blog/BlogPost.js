/**
 * FIXED VERSION - src/components/features/Blog/BlogPost.js
 * REPLACE YOUR CURRENT FILE WITH THIS
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, getRecentPosts } from '../../../data/blog';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const recentPosts = getRecentPosts(3);

  if (!post) {
    return (
      <div className="blog-post-error">
        <h2>Blog post not found</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <header className="blog-post__header">
        <div className="blog-post__category">{post.category}</div>
        <h1 className="blog-post__title">{post.title}</h1>
        <div className="blog-post__meta">
          <div className="blog-post__author">
            <img src={post.author.avatar} alt={post.author.name} />
            <div>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>
          <div className="blog-post__info">
            <span>{post.publishedDate}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      <div className="blog-post__image">
        <img src={post.image} alt={post.title} />
      </div>

      <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: post.content }} />

      <footer className="blog-post__footer">
        <div className="blog-post__tags">
          {post.tags.map(tag => (
            <span key={tag} className="blog-post__tag">{tag}</span>
          ))}
        </div>
      </footer>

      <aside className="blog-post__sidebar">
        <h3>Recent Posts</h3>
        <div className="blog-post__recent">
          {recentPosts.filter(p => p.id !== post.id).map(recentPost => (
            <Link key={recentPost.id} to={`/blog/${recentPost.slug}`} className="blog-post__recent-item">
              <img src={recentPost.image} alt={recentPost.title} />
              <div>
                <h4>{recentPost.title}</h4>
                <span>{recentPost.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </article>
  );
}

export default BlogPost;