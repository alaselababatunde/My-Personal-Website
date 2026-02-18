import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Layout, X } from 'lucide-react';

const Projects = ({ projects }) => {
    const [selectedDemo, setSelectedDemo] = useState(null);

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">AI Projects Showcase</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="project-card glass glow-hover"
                    >
                        <div className="project-icon">{project.icon}</div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>

                        <div className="project-tags">
                            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>

                        <div className="project-actions">
                            {project.demo ? (
                                <button
                                    onClick={() => setSelectedDemo(project.demo)}
                                    className="action-link primary"
                                >
                                    <Layout size={16} /> Live Demo
                                </button>
                            ) : (
                                <span className="action-link disabled">Production Grade</span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Demo Modal */}
            <AnimatePresence>
                {selectedDemo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="demo-modal-overlay"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="demo-modal glass"
                        >
                            <div className="modal-header">
                                <h3>Interactive Demo</h3>
                                <button onClick={() => setSelectedDemo(null)}><X /></button>
                            </div>
                            <div className="modal-body">
                                <iframe src={selectedDemo} title="AI Demo" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .project-card {
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .project-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .tag {
          font-size: 0.75rem;
          background: rgba(34, 139, 34, 0.1);
          color: var(--primary-green);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          border: 1px solid rgba(34, 139, 34, 0.2);
        }
        .project-actions {
          display: flex;
          gap: 1rem;
        }
        .action-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .action-link.primary {
          background: var(--primary-green);
          color: white;
          border: none;
        }
        .action-link.primary:hover {
          background: var(--secondary-green);
        }
        .action-link.disabled {
          background: var(--bg-card);
          color: var(--text-secondary);
          cursor: default;
        }

        .demo-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }
        .demo-modal {
          width: 100%;
          max-width: 1200px;
          height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .modal-header {
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-glass);
        }
        .modal-header button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        .modal-body {
          flex-grow: 1;
        }
        .modal-body iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: white;
        }
      `}</style>
        </section>
    );
};

export default Projects;
