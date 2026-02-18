import React from 'react';
import { motion } from 'framer-motion';

const About = ({ profile }) => {
    return (
        <section id="about" className="about-section">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Vision & Journey</h2>

                <div className="about-grid">
                    <div className="vision-card glass">
                        <h3>The Vision</h3>
                        <p className="vision-text">{profile.vision}</p>
                    </div>

                    <div className="achievements-list">
                        <h3>Key Milestones</h3>
                        {profile.achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="achievement-item glass glow-hover"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          position: relative;
          display: inline-block;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: var(--primary-green);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .vision-card {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .vision-card h3 {
          color: var(--primary-green);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        .vision-text {
          font-size: 1.5rem;
          font-style: italic;
          line-height: 1.5;
        }
        .achievement-item {
          padding: 1.25rem;
          margin-bottom: 1rem;
          border-left: 4px solid var(--primary-green);
          font-size: 0.95rem;
        }
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
