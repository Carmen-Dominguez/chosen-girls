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
                Chosen Girls is a heartfelt movement created to uplift, educate, and empower young women 
                to know their worth and walk boldly in their God-given identity. 
                It's a space where girls are reminded that they are loved, seen and chosen for purpose.
                THrough honest conversations, faith and support, Chosen Girls helps every girl rise withconfidence, 
                knowing she was wan never meant to blend in - she was born to stand out.  

              </p>
              <p>
                We believe that knowledge is power, and that understanding one's body is fundamental 
                to building confidence, self-esteem, and overall well-being. Too often, girls are left 
                without proper guidance about their changing bodies, leading to confusion, shame, and 
                missed opportunities for education and growth.
              </p>
            </div>
            <div className="story__image">
              <img src="/journey.jpeg" alt="Kamanga Mwele" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="founder">
        <div className="container">
          <div className="founder__content">
            <div className="founder__image">
                <img src="/founder.jpeg" alt="Kamanga Mwele" />
            </div>
            <div className="founder__text">
              <h1>Meet Our Founder</h1>
              <h2>Kamanga Mwele</h2>
              <p>
                Kamanga Mwele, a passionate student and women's health advocate, founded Chosen Girls 
                after witnessing the profound impact that lack of menstrual education had on girls in 
                her community. Kamanga recognized the urgent need for open, honest conversations about 
                women's health.
              </p>
              <p>
                "I remember the confusion and shame I felt as a young girl when I first got my period. 
                There was no one to talk to, no resources to turn to. I promised myself that if I ever 
                had the opportunity, I would make sure other girls didn't have to go through that 
                experience alone."
              </p>
              <p>
                Kamanga's vision extends beyond just education – she believes in creating lasting change 
                through community engagement, family involvement, and sustainable programs that can be 
                replicated in communities nationwide.
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
              <h2>Education Access</h2>
              <p>
                Provide comprehensive, age-appropriate health education to girls in underserved 
                communities, ensuring they have the knowledge they need to make informed decisions 
                about their health.
              </p>
            </div>
            
            <div className="goal-card">
              <div className="goal-card__icon">🤝</div>
              <h2>Community Engagement</h2>
              <p>
                Work with families, schools, and community leaders to create supportive environments 
                where girls feel safe discussing their health and asking questions.
              </p>
            </div>
            
            <div className="goal-card">
              <div className="goal-card__icon">📦</div>
              <h2>Resource Distribution</h2>
              <p>
                Ensure that girls have access to essential hygiene products and educational materials, 
                removing barriers that prevent them from attending school or participating in daily activities.
              </p>
            </div>
            
            <div className="goal-card">
              <div className="goal-card__icon">🇿🇦</div>
              <h2>National Impact</h2>
              <p>
                Expand our reach to serve more communities nationwide, sharing our successful programs 
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
              <h2>Compassion</h2>
              <p>
                We approach every interaction with empathy and understanding, recognizing that each 
                girl's journey is unique.
              </p>
            </div>
            
            <div className="value-item">
              <h2>Education</h2>
              <p>
                We believe in the power of knowledge and strive to provide accurate, comprehensive 
                information in accessible ways.
              </p>
            </div>
            
            <div className="value-item">
              <h2>Inclusivity</h2>
              <p>
                We welcome girls from all backgrounds, cultures, and circumstances, ensuring our 
                programs are accessible to everyone.
              </p>
            </div>
            
            <div className="value-item">
              <h2>Empowerment</h2>
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
              <a href="tel:+27602773531" className="btn btn-secondary">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
