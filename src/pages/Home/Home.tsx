import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                Empowering Girls Through Health Education
              </h1>
              <p className="hero__subtitle">
                Breaking the silence around menstrual health and providing girls with the knowledge, 
                resources, and confidence they need to thrive.
              </p>
              <div className="hero__cta">
                <Link to="/about" className="btn">
                  Learn More About Us
                </Link>
                <Link to="/faqs" className="btn btn-secondary">
                  Read Our FAQs
                </Link>
              </div>
            </div>
            <div className="hero__video">
              <video 
                className="hero__video-element"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="/placeholder-video-poster.png"
                onError={(e) => {
                  // Fallback to placeholder if video fails to load
                  const target = e.target as HTMLVideoElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.hero__fallback');
                  if (fallback) {
                    (fallback as HTMLElement).style.display = 'flex';
                  }
                }}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="hero__fallback" style={{ display: 'none' }}>
                <span>🌺</span>
                <p>Empowering young minds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission__content">
            <h1 className="mission__title">Our Mission</h1>
            <p className="mission__description">
              We believe every girl deserves access to comprehensive health education, 
              particularly around menstrual health. Our organization works to break down 
              barriers, dispel myths, and create safe spaces for open conversations about 
              women's health.
            </p>
            
            <div className="mission__stats">
              <div className="mission__stat">
                <div className="mission__stat-number">500+</div>
                <div className="mission__stat-label">Girls Educated</div>
              </div>
              <div className="mission__stat">
                <div className="mission__stat-number">4</div>
                <div className="mission__stat-label">Schools Reached</div>
              </div>
              <div className="mission__stat">
                <div className="mission__stat-number">100%</div>
                <div className="mission__stat-label">Free Resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <div className="container">
          <h1 className="programs__title">What We Do</h1>
          <div className="programs__grid">
            <div className="program-card">
              <div className="program-card__icon">📚</div>
              <h3 className="program-card__title">Educational Workshops</h3>
              <p className="program-card__description">
                Interactive sessions covering menstrual health, hygiene, and body awareness 
                in a safe, supportive environment.
              </p>
            </div>
            
            <div className="program-card">
              <div className="program-card__icon">🎒</div>
              <h3 className="program-card__title">Resource Distribution</h3>
              <p className="program-card__description">
                Providing essential hygiene products and educational materials to girls 
                who need them most.
              </p>
            </div>
            
            <div className="program-card">
              <div className="program-card__icon">💬</div>
              <h3 className="program-card__title">Community Support</h3>
              <p className="program-card__description">
                Creating safe spaces for open dialogue and peer support among girls 
                and their families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-section__content">
            <h1 className="cta-section__title">Join Us in Making a Difference</h1>
            <p className="cta-section__description">
              Every girl deserves to understand her body and feel confident about her health. 
              Help us reach more girls and create lasting change in communities worldwide.
            </p>
            <div className="cta-section__buttons">
              <Link to="/about" className="btn">
                Learn More About Our Work
              </Link>
              <a href="mailto:info@chosengirls.org" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
