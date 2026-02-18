import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Cpu, ShieldCheck } from 'lucide-react';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Qualifications & Expertise</h2>

      <div className="exp-grid">
        <div className="skills-column">
          <div className="glass-card glass">
            <div className="card-header">
              <Cpu className="icon" />
              <h3>Tech Stack</h3>
            </div>
            <div className="skill-groups">
              <div className="skill-group">
                <h4>Languages</h4>
                <div className="skill-tags">
                  {experience.skills.languages.map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
              <div className="skill-group">
                <h4>AI / Frameworks</h4>
                <div className="skill-tags">
                  {experience.skills.frameworks.map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-column">
          <div className="glass-card glass">
            <div className="card-header">
              <GraduationCap className="icon" />
              <h3>Education</h3>
            </div>
            {experience.education.map((edu, i) => (
              <div key={i} className="timeline-item">
                <h4>{edu.institution}</h4>
                <p>{edu.degree} • {edu.status}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .exp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 3rem;
        }
        .glass-card {
          padding: 2.5rem;
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          color: var(--primary-green);
        }
        .card-header h3 {
          font-size: 1.5rem;
          color: white;
        }
        .skill-groups {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .skill-group h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary-green);
          margin-bottom: 1rem;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .skill-tags span {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-glass);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.9rem;
        }
        .timeline-item {
          padding-left: 1.5rem;
          border-left: 2px solid var(--primary-green);
          margin-bottom: 1.5rem;
        }
        .timeline-item h4 {
          margin-bottom: 0.25rem;
        }
        .timeline-item p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .cert-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .cert-list li {
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .cert-list li::before {
          content: '✔';
          color: var(--primary-green);
        }
        @media (max-width: 968px) {
          .exp-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
