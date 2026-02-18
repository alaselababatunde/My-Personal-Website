import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Shield, X, Copy, CreditCard } from 'lucide-react';

const Services = ({ services, payment }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

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

            <button
              className="service-cta"
              onClick={() => setSelectedService(service)}
            >
              Request Transmission <Shield size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="checkout-modal glass"
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedService(null)}>
                <X size={24} />
              </button>

              <div className="modal-header">
                <CreditCard className="icon" size={32} />
                <h3>Secure Checkout</h3>
                <p>You are requesting: <strong>{selectedService.title}</strong></p>
              </div>

              <div className="payment-instructions">
                <p>To initiate this transmission, please complete a bank transfer of <strong>{selectedService.initialPrice}</strong> to the account details below:</p>

                <div className="bank-card">
                  <div className="field">
                    <label>Bank Name</label>
                    <div className="value-group">
                      <span>{payment?.bank}</span>
                    </div>
                  </div>
                  <div className="field">
                    <label>Account Number</label>
                    <div className="value-group">
                      <span>{payment?.accountNumber}</span>
                      <button onClick={() => handleCopy(payment?.accountNumber)} className="copy-btn">
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="field">
                    <label>Account Name</label>
                    <div className="value-group">
                      <span>{payment?.accountName}</span>
                    </div>
                  </div>
                </div>

                <p className="note">Once paid, please send a <strong>screenshot of the receipt</strong> and a <strong>description of the AI</strong> to be developed via the Contact section, Email, or Phone to finalize the deployment.</p>
              </div>

              <button
                className="confirm-btn"
                onClick={() => setSelectedService(null)}
              >
                I have made the payment
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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

        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(8px);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        .checkout-modal {
            max-width: 500px;
            width: 100%;
            padding: 3rem;
            position: relative;
        }
        .close-btn {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
        }
        .modal-header {
            text-align: center;
            margin-bottom: 2.5rem;
        }
        .modal-header .icon {
            color: var(--primary-green);
            margin-bottom: 1rem;
        }
        .modal-header h3 {
            font-size: 1.75rem;
            color: white;
            margin-bottom: 0.5rem;
        }
        .payment-instructions p {
            font-size: 0.95rem;
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }
        .bank-card {
            background: rgba(255,255,255,0.05);
            padding: 1.5rem;
            border-radius: 16px;
            border: 1px solid var(--border-glass);
            margin-bottom: 2rem;
        }
        .field {
            margin-bottom: 1.25rem;
        }
        .field:last-child { margin-bottom: 0; }
        .field label {
            display: block;
            font-size: 0.75rem;
            text-transform: uppercase;
            color: var(--primary-green);
            margin-bottom: 0.4rem;
            letter-spacing: 0.05em;
        }
        .value-group {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.1rem;
            color: white;
        }
        .copy-btn {
            background: rgba(255,255,255,0.1);
            border: none;
            color: var(--primary-green);
            padding: 0.4rem;
            border-radius: 6px;
            cursor: pointer;
            transition: 0.2s;
        }
        .copy-btn:hover { background: var(--primary-green); color: white; }
        .note {
            font-size: 0.8rem !important;
            font-style: italic;
            text-align: center;
        }
        .confirm-btn {
            width: 100%;
            background: var(--primary-green);
            color: white;
            border: none;
            padding: 1.25rem;
            border-radius: 12px;
            font-weight: 700;
            margin-top: 1rem;
            cursor: pointer;
            box-shadow: 0 0 20px rgba(34, 139, 34, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Services;
