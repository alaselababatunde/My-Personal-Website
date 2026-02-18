import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Cpu, ShieldCheck } from 'lucide-react';

const Experience = ({ experience }) => {
  if (!experience) return <div className="section-skeleton" style={{ height: '60vh' }}></div>;

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Qualifications & Expertise</h2>

      <div className="exp-grid">
        <div className="work-column">
          <div className="glass-card glass">
            <div className="card-header">
              <ShieldCheck className="icon" />
              <h3>Professional Journey</h3>
            </div>
            <div className="work-timeline">
              {experience.work.map((job, i) => (
                <div key={i} className="work-item">
                  <div className="work-meta">
                    <h4>{job.role}</h4>
                    <span className="period">{job.period}</span>
                  </div>
                  <h5 className="company">{job.company}</h5>
                  <p className="description">{job.description}</p>
                </div>
              ))}
            </div>

            <div className="volunteer-section" style={{ marginTop: '3rem' }}>
              <h4 className="sub-title">Volunteer & Contributions</h4>
              <div className="volunteer-grid">
                {experience.volunteer.map((v, i) => (
                  <div key={i} className="work-item mini">
                    <div className="work-meta">
                      <h4>{v.role}</h4>
                      <span className="period">{v.period}</span>
                    </div>
                    <h5 className="company">{v.organization}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="edu-skills-column">
          <div className="glass-card glass">
            <div className="card-header">
              <GraduationCap className="icon" />
              <h3>Academic & Courses</h3>
            </div>
            <div className="edu-list">
              <h4 className="category-label">Formal Education</h4>
              {experience.education.formal.map((edu, i) => (
                <div key={i} className="timeline-item">
                  <h4>{edu.degree}</h4>
                  <p>{edu.institution} • {edu.status}</p>
                </div>
              ))}

              <h4 className="category-label" style={{ marginTop: '2rem' }}>Training & Online Specializations</h4>
              {experience.education.online.map((edu, i) => (
                <div key={i} className="timeline-item small">
                  <h4>{edu.course}</h4>
                  <p>{edu.platform} • {edu.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card glass" style={{ marginTop: '2rem' }}>
            <div className="card-header">
              <Cpu className="icon" />
              <h3>Technical Stack</h3>
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
      </div>

      <style jsx>{`
        .exp-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2.5rem;
          margin-top: 3rem;
        }
        .work-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .work-item {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid var(--border-glass);
          transition: var(--transition-smooth);
        }
        .work-item:hover {
          border-left-color: var(--primary-green);
        }
        .work-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        .work-meta h4 {
          font-size: 1.1rem;
          color: white;
        }
        .period {
          font-size: 0.8rem;
          color: var(--primary-green);
          font-weight: 600;
          background: rgba(34, 139, 34, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }
        .company {
          font-size: 0.95rem;
          color: var(--primary-green);
          margin-bottom: 0.75rem;
        }
        .description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .glass-card {
          padding: 2.5rem;
        }
        .sub-title {
          font-size: 1rem;
          color: white;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        .volunteer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .work-item.mini {
          padding-left: 1.5rem;
          border-left: 1px solid var(--border-glass);
        }
        .category-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--primary-green);
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }
        .timeline-item.small h4 {
          font-size: 0.95rem;
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
