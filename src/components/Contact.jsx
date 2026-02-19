import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = ({ profile }) => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container glass">
                <div className="contact-info">
                    <h2>Let's Build the Future</h2>
                    <p>Have a project in mind or want to collaborate on the next AI breakthrough? Get in touch via the details below.</p>

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
            </div>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} {profile.name}. All systems operational.</p>
            </footer>

            <style jsx>{`
        .contact-container {
          padding: 5rem 4rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        .contact-info {
           display: flex;
           flex-direction: column;
           align-items: center;
        }
        .contact-info h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: white;
        }
        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 4rem;
          max-width: 600px;
        }
        .info-items {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 4rem;
          width: 100%;
          flex-wrap: wrap;
        }
        .info-item {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
          min-width: 150px;
        }
        .info-item .icon {
          color: var(--primary-green);
          width: 32px;
          height: 32px;
        }
        .info-item span {
          display: block;
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .info-item p {
          margin-bottom: 0;
          color: white;
          font-weight: 500;
          font-size: 1.1rem;
        }

        .footer {
          margin-top: 6rem;
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
          padding-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .contact-container {
            padding: 3rem 1.5rem;
          }
          .info-items {
            flex-direction: column;
            gap: 2.5rem;
          }
          .contact-info h2 {
            font-size: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
