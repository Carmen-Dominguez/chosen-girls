import React from 'react';
import './Footer.scss';

// Social media link interface
interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks: SocialLink[] = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: '📘',
      ariaLabel: 'Visit our Facebook page'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: '📷',
      ariaLabel: 'Follow us on Instagram'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '🐦',
      ariaLabel: 'Follow us on Twitter'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: '📺',
      ariaLabel: 'Subscribe to our YouTube channel'
    }
  ];

  // Handle social media link click
  const handleSocialClick = (url: string, name: string) => {
    // In a real application, you might want to track these clicks
    console.log(`Opening ${name} link: ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Main footer section */}
          <div className="footer__main">
            <div className="footer__brand">
              <h3 className="footer__logo">Chosen Girls</h3>
              <p className="footer__tagline">
                Empowering girls through health education and menstrual awareness
              </p>
            </div>

            <div className="footer__social">
              <h4 className="footer__social-title">Follow Us</h4>
              <div className="footer__social-links">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    className="footer__social-link"
                    onClick={() => handleSocialClick(social.url, social.name)}
                    aria-label={social.ariaLabel}
                    title={social.name}
                  >
                    <span className="footer__social-icon">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom footer section */}
          <div className="footer__bottom">
            <div className="footer__copyright">
              <p>
                © {currentYear} Chosen Girls. All rights reserved.
              </p>
              <p className="footer__disclaimer">
                Dedicated to improving girls' health and education worldwide.
              </p>
            </div>

            {/* <div className="footer__links">
              <a href="/privacy" className="footer__link">Privacy Policy</a>
              <span className="footer__separator">•</span>
              <a href="/terms" className="footer__link">Terms of Service</a>
              <span className="footer__separator">•</span>
              <a href="/contact" className="footer__link">Contact Us</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
