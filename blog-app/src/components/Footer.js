import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 text-center" style={{ position: "fixed", left: 0, bottom: 0, width: "100%" }}>
      &copy; {new Date().getFullYear()} Techs Teach. All rights reserved.
    </footer>
  );
};

export default Footer;
