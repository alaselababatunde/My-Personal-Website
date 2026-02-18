import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield } from 'lucide-react';

const Services = ({ services }) => {
    return (
        <section id="services" className="services-section">
            <h2 className="section-title">Service Offerings & Pricing</h2>

            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`service-card glass ${index === 1 ? 'featured' : ''}`}
                    >
                        {index === 1 && <div className="featured-badge">Highly Scalable</div>}
                        <h3>{service.title}</h3>
                        <p className="service-desc">{service.description}</p>

                        <div className="pricing-block">
                            <div className="price-item">
                                <span className="label">Initial Dev</span>
                                <span className="amount">{service.initialPrice}</span>
                            </div>
                            <div className="price-item renewal">
                                <span className="label">Annual Renewal</span>
                                <span className="amount">{service.renewalPrice}</span>
                            </div>
                        </div>

                        <ul className="service-features">
                            {service.features.map((feature, i) => (
                                <li key={i}><Check size={16} className="icon" /> {feature}</li>
                            ))}
                        </ul>

                        <button className="service-cta">
                            Request Transmission <Shield size={16} />
                        </button>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .service-card {
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .service-card.featured {
          border-color: var(--primary-green);
          box-shadow: 0 0 30px var(--accent-glow);
          transform: translateY(-10px);
        }
        .featured-badge {
          position: absolute;
          top: 0;
          right: 2rem;
          transform: translateY(-50%);
          background: var(--primary-green);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary-green);
        }
        .service-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          min-height: 3rem;
        }
        .pricing-block {
          background: rgba(255,255,255,0.03);
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          border: 1px solid var(--border-glass);
        }
        .price-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        .price-item.renewal {
          opacity: 0.7;
          font-size: 0.85rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px dashed var(--border-glass);
        }
        .amount {
          font-weight: 700;
          font-size: 1.1rem;
          color: white;
        }
        .service-features {
          list-style: none;
          margin-bottom: 2.5rem;
          flex-grow: 1;
        }
        .service-features li {
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
        }
        .service-features .icon {
          color: var(--primary-green);
        }
        .service-cta {
          width: 100%;
          background: transparent;
          border: 1px solid var(--primary-green);
          color: var(--primary-green);
          padding: 1rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        .service-cta:hover {
          background: var(--primary-green);
          color: white;
        }
      `}</style>
        </section>
    );
};

export default Services;
