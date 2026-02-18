import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion'; // Added framer-motion import

const Contact = ({ profile }) => {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using your email directly as the Formspree endpoint
      const response = await fetch(`https://formspree.io/f/alaselababatunde10@gmail.com`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New AI Project Transmission: ${formData.subject}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container glass">
        <div className="contact-info">
          <h2>Let's Build the Future</h2>
          <p>Have a project in mind or want to collaborate on the next AI breakthrough? Get in touch.</p>

          <div className="info-items">
            <div className="info-item">
              <Mail className="icon" />
              <div>
                <span>Email</span>
                <p>{profile.email}</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="icon" />
              <div>
                <span>Phone</span>
                <p>{profile.phone}</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="icon" />
              <div>
                <span>Location</span>
                <p>{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form-wrapper">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="success-message glass"
            >
              <div className="success-icon">✓</div>
              <h3>Transmission Complete</h3>
              <p>Your message has been encoded and sent through the uplink. I'll get back to you shortly.</p>
              <button onClick={() => setStatus('idle')} className="submit-btn secondary">Send Another</button>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                disabled={status === 'sending'}
              />
              <textarea
                name="message"
                placeholder="Your Message (Include AI Description if applicable)"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'sending'}
              ></textarea>
              <button type="submit" className="submit-btn glow-hover" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <span className="loading-dots">Initializing Uplink</span>
                ) : (
                  <>Send Transmission <Send size={18} /></>
                )}
              </button>
              {status === 'error' && <p className="error-text">Uplink failed. Please check your connection or try again.</p>}
            </form>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All systems operational.</p>
      </footer>

      <style jsx>{`
        .contact-container {
          padding: 4rem;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          position: relative;
        }
        .form-wrapper {
          position: relative;
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }
        .success-message {
          text-align: center;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          height: 100%;
          justify-content: center;
        }
        .success-icon {
          width: 60px;
          height: 60px;
          background: var(--primary-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .error-text {
            color: #ff4d4d;
            font-size: 0.9rem;
            margin-top: 0.5rem;
            text-align: center;
        }
        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .info-item .icon {
          color: var(--primary-green);
        }
        .info-item span {
          display: block;
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .info-item p {
          margin-bottom: 0;
          color: white;
          font-weight: 500;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .input-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        input, textarea {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-glass);
          padding: 1rem;
          border-radius: 8px;
          color: white;
          font-family: inherit;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-green);
          background: rgba(255,255,255,0.08);
        }
        .submit-btn {
          background: var(--primary-green);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .submit-btn.secondary {
            background: rgba(255,255,255,0.05);
            border: 1px solid var(--border-glass);
            margin-top: 1rem;
        }
        .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        .footer {
          margin-top: 6rem;
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
          padding-bottom: 2rem;
        }

        @media (max-width: 968px) {
          .contact-container {
            grid-template-columns: 1fr;
            padding: 2.5rem;
          }
          .input-group {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
