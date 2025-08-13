import React, { useState } from 'react';
import './FAQs.scss';

// FAQ item interface
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // FAQ data
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What is menstruation and when does it typically start?",
      answer: "Menstruation is the monthly shedding of the uterine lining, which occurs when an egg is not fertilized. Most girls start their period between the ages of 10-15, with the average age being 12. However, it's completely normal to start earlier or later. The first period is called menarche.",
      category: "basics"
    },
    {
      id: 2,
      question: "How long does a typical period last?",
      answer: "A typical period lasts between 3-7 days, with the average being 5 days. The flow is usually heaviest during the first 2-3 days and then gradually becomes lighter. It's normal for periods to be irregular, especially in the first few years after starting menstruation.",
      category: "basics"
    },
    {
      id: 3,
      question: "What are the common symptoms of menstruation?",
      answer: "Common symptoms include cramps in the lower abdomen, bloating, breast tenderness, mood changes, fatigue, and food cravings. Some girls also experience headaches, back pain, or acne. These symptoms are normal and usually manageable with proper self-care.",
      category: "symptoms"
    },
    {
      id: 4,
      question: "How can I manage period cramps?",
      answer: "To manage cramps, try gentle exercise like walking or yoga, apply a heating pad to your lower abdomen, take a warm bath, practice relaxation techniques, and consider over-the-counter pain relievers like ibuprofen. Regular exercise and a healthy diet can also help reduce cramps over time.",
      category: "symptoms"
    },
    {
      id: 5,
      question: "What menstrual products are available?",
      answer: "There are several options: sanitary pads (disposable or reusable), tampons, menstrual cups, period underwear, and menstrual discs. Each has its own benefits, and it's important to choose what feels most comfortable for you. You can also use different products for different situations.",
      category: "products"
    },
    {
      id: 6,
      question: "How often should I change my menstrual products?",
      answer: "Pads should be changed every 4-6 hours, tampons every 4-8 hours, and menstrual cups can be worn for up to 12 hours. Always change products when they feel full or uncomfortable. Never leave a tampon in for more than 8 hours to avoid the risk of toxic shock syndrome.",
      category: "products"
    },
    {
      id: 7,
      question: "Is it normal for periods to be irregular?",
      answer: "Yes, it's very normal for periods to be irregular, especially during the first few years after starting menstruation. Stress, diet, exercise, and other factors can affect your cycle. However, if you're concerned about irregular periods, it's always good to talk to a healthcare provider.",
      category: "health"
    },
    {
      id: 8,
      question: "What should I do if I miss a period?",
      answer: "Missing a period can happen for many reasons including stress, illness, weight changes, or pregnancy. If you're sexually active and miss a period, consider taking a pregnancy test. If you're concerned about missed periods, talk to a healthcare provider.",
      category: "health"
    },
    {
      id: 9,
      question: "Can I exercise during my period?",
      answer: "Absolutely! Exercise can actually help reduce cramps and improve your mood during your period. Light to moderate exercise like walking, swimming, or yoga is great. Listen to your body and don't push yourself too hard if you're feeling tired or uncomfortable.",
      category: "lifestyle"
    },
    {
      id: 10,
      question: "What should I eat during my period?",
      answer: "Focus on a balanced diet with plenty of fruits, vegetables, whole grains, and lean proteins. Iron-rich foods like spinach, beans, and lean meats can help with energy levels. Stay hydrated by drinking plenty of water. Some girls find that reducing salt and caffeine helps with bloating.",
      category: "lifestyle"
    },
    {
      id: 11,
      question: "How can I talk to my parents about my period?",
      answer: "It's completely normal to feel nervous about this conversation. You might start by saying something like 'I have some questions about periods' or 'Can we talk about what to expect?' Most parents want to help and will appreciate you being open. If you're uncomfortable talking to your parents, consider talking to another trusted adult like a teacher, school nurse, or family member.",
      category: "support"
    },
    {
      id: 12,
      question: "When should I see a doctor about my period?",
      answer: "See a doctor if you experience severe pain that doesn't improve with over-the-counter medication, very heavy bleeding (soaking through a pad or tampon every hour), periods that last longer than 7 days, or if you haven't started your period by age 16. Trust your instincts - if something doesn't feel right, it's always okay to ask for help.",
      category: "health"
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'basics', name: 'Basics' },
    { id: 'symptoms', name: 'Symptoms' },
    { id: 'products', name: 'Products' },
    { id: 'health', name: 'Health' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'support', name: 'Support' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter FAQs by category
  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  // Toggle FAQ open/closed
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="faqs">
      {/* Hero Section */}
      <section className="faqs-hero">
        <div className="container">
          <div className="faqs-hero__content">
            <h1 className="faqs-hero__title">Frequently Asked Questions</h1>
            <p className="faqs-hero__subtitle">
              Find answers to common questions about menstrual health and education
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faqs-content">
        <div className="container">
          {/* Category Filter */}
          <div className="faqs-filter">
            <h3>Filter by Category:</h3>
            <div className="faqs-filter__buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`faqs-filter__btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="faqs-list">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button
                  className={`faq-item__question ${openFAQ === faq.id ? 'active' : ''}`}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openFAQ === faq.id}
                >
                  <span>{faq.question}</span>
                  <span className="faq-item__icon">
                    {openFAQ === faq.id ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-item__answer ${openFAQ === faq.id ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="faqs-help">
            <h3>Still Have Questions?</h3>
            <p>
              If you couldn't find the answer you're looking for, we're here to help! 
              Feel free to reach out to us with your questions.
            </p>
            <div className="faqs-help__buttons">
              <a href="mailto:questions@chosengirls.org" className="btn">
                Ask a Question
              </a>
              <a href="mailto:support@chosengirls.org" className="btn btn-secondary">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
