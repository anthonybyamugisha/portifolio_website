import React, { useState, useEffect } from 'react';

function Contact() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Create mailto link with pre-filled content
    const emailBody = `Hello Anthony,

You have received a new message from your portfolio website.

--- Contact Details ---
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

--- Message ---
${formData.message}

--- End of Message ---

This message was sent from your portfolio contact form.

Best regards,
Portfolio Contact System`;

    const mailtoLink = `mailto:byamugishanthony@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open Gmail with pre-filled email immediately
    window.open(mailtoLink, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear errors
    setErrors({});
  };

  return (
    <div className="contact">
      <div 
        className="semi-circle"
        style={{
          transform: `translateY(-50%) scale(${1 + scrollProgress * 0.5})`,
          opacity: 0.8 + scrollProgress * 0.2
        }}
      ></div>
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      ></div>
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>I'm BYAMUGISHA ANTHONY, and I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>byamugishanthony@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>+256748161708</p>
            </div>
          </div>
          
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Location</h3>
              <p>Makerere, Kampala Uganda</p>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://github.com/anthonybyamugisha" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/byamugisha-anthony-98853b333/" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.upwork.com/freelancers/~0186637ac601dd1727" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-briefcase"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send Me a Message</h2>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows="5"
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
              >
                <i className="fas fa-paper-plane"></i>
                Send
              </button>
            </form>
          
          {/* Alternative Contact Methods */}
          <div className="alternative-contact">
            <p>Prefer to contact me directly?</p>
            <div className="direct-contact-buttons">
              <a href="mailto:byamugishanthony@gmail.com" className="direct-contact-btn email">
                <i className="fas fa-envelope"></i>
                Send Email
              </a>
              <a href="tel:+256748161708" className="direct-contact-btn phone">
                <i className="fas fa-phone"></i>
                Call Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
