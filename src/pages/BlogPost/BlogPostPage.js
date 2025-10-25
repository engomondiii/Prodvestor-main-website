/**
 * PRODVESTOR WEBSITE - BLOG POST PAGE
 * FILE LOCATION: src/pages/BlogPost/BlogPostPage.js
 */

import React from 'react';
import { BlogPost } from '../../components/features/Blog';
import './BlogPostPage.css';

function BlogPostPage() {
  return (
    <div className="blog-post-page">
      <BlogPost />
    </div>
  );
}

export default BlogPostPage;