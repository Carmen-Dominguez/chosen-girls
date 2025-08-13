import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">About Chosen Girls</h1>
            <p className="about-hero__subtitle">
              Dedicated to breaking barriers and empowering girls through comprehensive health education
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story">
        <div className="container">
          <div className="story__content">
            <div className="story__text">
              <h2>Our Story</h2>
              <p>
                Chosen Girls was founded in 2020 with a simple yet powerful mission: to ensure that 
                every girl has access to accurate, comprehensive health education, particularly around 
                menstrual health. What started as a small local initiative has grown into a 
                community-driven organization that has touched the lives of hundreds of girls and their families.
              </p>
              <p>
                We believe that knowledge is power, and that understanding one's body is fundamental 
                to building confidence, self-esteem, and overall well-being. Too often, girls are left 
                without proper guidance about their changing bodies, leading to confusion, shame, and 
                missed opportunities for education and growth.
              </p>
            </div>
            <div className="story__image">
              <div className="story__placeholder">
                <span>🌟</span>
                <p>Our journey began with a simple dream</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="founder">
        <div className="container">
          <div className="founder__content">
            <div className="founder__image">
              <div className="founder__placeholder">
                <span>👩‍🏫</span>
                <p>Meet our founder</p>
              </div>
            </div>
            <div className="founder__text">
              <h2>Meet Our Founder</h2>
              <h3>Sarah Johnson</h3>
              <p>
                Sarah Johnson, a passionate educator and women's health advocate, founded Chosen Girls 
                after witnessing the profound impact that lack of menstrual education had on girls in 
                her community. With over 15 years of experience in health education and community 
                development, Sarah recognized the urgent need for open, honest conversations about 
                women's health.
              </p>
              <p>
                "I remember the confusion and shame I felt as a young girl when I first got my period. 
                There was no one to talk to, no resources to turn to. I promised myself that if I ever 
                had the opportunity, I would make sure other girls didn't have to go through that 
                experience alone."
              </p>
              <p>
                Sarah's vision extends beyond just education – she believes in creating lasting change 
                through community engagement, family involvement, and sustainable programs that can be 
                replicated in communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="goals">
        <div className="container">
          <h2 className="goals__title">Our Goals</h2>
          <div className="goals__grid">
            <div className="goal-card">
              <div className="goal-card__icon">🎯</div>
              <h3>Education Access</h3>
              <p>
                Provide comprehensive, age-appropriate health education to girls in underserved 
                communities, ensuring they have the knowledge they need to make informed decisions 
                about their health.
              </p>
            </div>
            
            <div className="goal-card">
              <div className="goal-card__icon">🤝</div>
              <h3>Community Engagement</h3>
              <p>
                Work with families, schools, and community leaders to create supportive environments 
                where girls feel safe discussing their health and asking questions.
              </p>
            </div>
            
            <div className="goal-card">
              <div className="goal-card__icon">📦</div>
              <h3>Resource Distribution</h3>
              <p>
                Ensure that girls have access to essential hygiene products and educational materials, 
                removing barriers that prevent them from attending school or participating in daily activities.
              </p>
            </div>
            
            <div className="goal-card">
              <div className="goal-card__icon">🌍</div>
              <h3>Global Impact</h3>
              <p>
                Expand our reach to serve more communities worldwide, sharing our successful programs 
                and methodologies with other organizations working toward similar goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2 className="values__title">Our Values</h2>
          <div className="values__list">
            <div className="value-item">
              <h3>Compassion</h3>
              <p>
                We approach every interaction with empathy and understanding, recognizing that each 
                girl's journey is unique.
              </p>
            </div>
            
            <div className="value-item">
              <h3>Education</h3>
              <p>
                We believe in the power of knowledge and strive to provide accurate, comprehensive 
                information in accessible ways.
              </p>
            </div>
            
            <div className="value-item">
              <h3>Inclusivity</h3>
              <p>
                We welcome girls from all backgrounds, cultures, and circumstances, ensuring our 
                programs are accessible to everyone.
              </p>
            </div>
            
            <div className="value-item">
              <h3>Empowerment</h3>
              <p>
                We focus on building confidence and self-esteem, helping girls recognize their 
                strength and potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved">
        <div className="container">
          <div className="get-involved__content">
            <h2>Get Involved</h2>
            <p>
              There are many ways you can support our mission and help us reach more girls. 
              Whether you're interested in volunteering, donating, or spreading the word about 
              our work, we'd love to hear from you.
            </p>
            <div className="get-involved__buttons">
              <a href="mailto:volunteer@chosengirls.org" className="btn">
                Volunteer With Us
              </a>
              <a href="mailto:donate@chosengirls.org" className="btn btn-secondary">
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
