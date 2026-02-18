import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';

const Certificates = ({ certificates }) => {
    return (
        <section id="certificates" className="certificates-section">
            <h2 className="section-title">Certifications & Accolades</h2>

            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="certificate-card glass glow-hover"
                    >
                        <div className="cert-info">
                            <div className="cert-header">
                                <Award className="icon" size={24} />
                                <span className="cert-category">{cert.category}</span>
                            </div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">Issued by {cert.issuer}</p>
                        </div>

                        <div className="cert-actions">
                            <a
                                href={cert.file}
                                target="_blank"
                                rel="noreferrer"
                                className="view-btn"
                            >
                                <FileText size={16} /> View Credentials <ExternalLink size={14} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .certificate-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .cert-header .icon {
          color: var(--primary-green);
        }
        .cert-category {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }
        .cert-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .cert-issuer {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        .cert-actions {
          margin-top: auto;
        }
        .view-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--primary-green);
          transition: var(--transition-smooth);
        }
        .view-btn:hover {
          color: white;
          transform: translateX(5px);
        }
      `}</style>
        </section>
    );
};

export default Certificates;
