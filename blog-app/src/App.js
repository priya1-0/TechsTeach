import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BlogPreview from './components/BlogPostPreview';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import About from './components/About';
import '../src/styles.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          
          <Routes>
            <Route path="/" element={<BlogPreview />} />
            <Route path="/blog/:postId" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
