import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Projects', 'Services', 'Experience', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="nav-logo"
        >
          ALASH <span>STUDIOS</span>
        </motion.div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 2rem;
          transition: var(--transition-smooth);
          background: rgba(10, 10, 10, 0.4);
          backdrop-filter: blur(5px);
        }
        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          border-bottom: 1px solid var(--border-glass);
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          font-weight: 700;
          letter-spacing: 0.1em;
          font-size: 1.25rem;
        }
        .nav-logo span {
          color: var(--primary-green);
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }
        .nav-link:hover {
          color: var(--primary-green);
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
