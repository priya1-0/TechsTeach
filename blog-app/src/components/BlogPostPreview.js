import React from 'react';
import { Link } from 'react-router-dom';

function BlogPostPreview() {
  // Replace this with actual blog post data
  const blogPosts = [
    { id: 1, title: 'Study Smarter: 10 Must-Have Online Tools for Students', excerpt: 'In this blog post, we will discuss 10 must-have online tools for students. These tools range from collaborative note-taking platforms to distraction-free writing apps.' },
    
  ];

  return (
    <div className="blog-post bg-light p-3 mb-3">
      {blogPosts.map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`} className="text-decoration-none"> {/* Use the 'text-decoration-none' class to remove the underline */}
          <div className="blog-post-preview">
            <h3 className="mb-3">{post.title}</h3>
            <p className="mb-0">{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogPostPreview;
