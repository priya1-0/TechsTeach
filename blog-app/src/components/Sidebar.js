import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="col-md-3 bg-dark text-white py-3">
      <Link to="/" className="d-block text-white mb-3">Home</Link>
      <Link to="/blog/1" className="d-block text-white mb-3">Blog Post 1</Link>
      <Link to="/blog/2" className="d-block text-white mb-3">Blog Post 2</Link>
      {/* Add more links as needed */}
    </aside>
  );
};

export default Sidebar;
