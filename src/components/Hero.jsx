import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const Hero = ({ profile }) => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <div className="status-badge glass">
          <span className="pulse"></span>
          System Online: {profile.title}
        </div>

        <h1 className="hero-name">
          {profile.name.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? 'accent' : ''}>{word} </span>
          ))}
        </h1>

        <p className="hero-bio">
          {profile.bio}
        </p>

        <div className="social-links">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="glass glow-hover"><Github size={20} /></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="glass glow-hover"><Linkedin size={20} /></a>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="glass glow-hover"><Twitter size={20} /></a>
          <a href={`mailto:${profile.email}`} className="glass glow-hover"><Mail size={20} /></a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          View Projects <ArrowRight size={18} />
        </motion.button>
      </motion.div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px;
        }
        .hero-content {
          max-width: 800px;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          color: var(--primary-green);
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .pulse {
          width: 8px;
          height: 8px;
          background: var(--primary-green);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary-green);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        .hero-name {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .accent {
          color: var(--primary-green);
          text-shadow: 0 0 30px var(--accent-glow);
        }
        .hero-bio {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 2.5rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .social-links a {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cta-button {
          background: var(--primary-green);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .cta-button:hover {
          background: var(--secondary-green);
          box-shadow: 0 0 20px var(--accent-glow);
        }
      `}</style>
    </section>
  );
};

export default Hero;
