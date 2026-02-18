import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = ({ profile }) => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
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

        <div className="cta-group">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects <ArrowRight size={18} />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button secondary"
            href="/assets/resume.pdf"
            download="Alasela_Babatunde_Resume.pdf"
          >
            Download Resume <Download size={18} />
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-image-container"
      >
        <div className="image-frame glass">
          <img src={profile.headshot} alt={profile.name} className="headshot" />
          <div className="glow-border"></div>
        </div>
      </motion.div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 4rem;
          position: relative;
          padding-top: 80px;
        }
        .hero-content {
          max-width: 800px;
        }
        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-frame {
          position: relative;
          width: 320px;
          height: 420px;
          border-radius: 24px;
          overflow: hidden;
          padding: 0;
        }
        .headshot {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.1) brightness(1.05);
        }
        .glow-border {
          position: absolute;
          inset: 0;
          border: 2px solid var(--primary-green);
          border-radius: 24px;
          opacity: 0.3;
          pointer-events: none;
          box-shadow: inset 0 0 20px var(--accent-glow);
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
        .cta-group {
          display: flex;
          gap: 1.5rem;
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
        .cta-button.secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
        }
        .cta-button:hover {
          background: var(--secondary-green);
          color: white;
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary-green);
          color: var(--primary-green);
        }
        @media (max-width: 968px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 120px;
          }
          .hero-content, .hero-bio {
            margin-left: auto;
            margin-right: auto;
          }
          .social-links {
            justify-content: center;
          }
          .cta-group {
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
          }
          .cta-button {
            margin: 0 auto;
            width: fit-content;
          }
          .hero-image-container {
            order: -1;
            margin-bottom: 2rem;
          }
          .image-frame {
            width: 260px;
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
