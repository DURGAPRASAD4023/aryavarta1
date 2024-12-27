import React, { useEffect } from 'react';
import './Aboutus.css';
import image from '../../assets/aboutimg.jpg';

const Aboutus = () => {
  useEffect(() => {
    const aboutSection = document.querySelector('.about');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    observer.observe(aboutSection);

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <div className='about'>
      <div className="left">
        <h3>About Us</h3>
        <h2>Crafting Legacies, One Home at a Time</h2>
        <p>Welcome to Aryavarta Developers, where innovation meets tradition to create extraordinary living spaces. Rooted in excellence and driven by a vision to redefine urban lifestyles, we specialize in crafting high-rise gated communities that seamlessly blend comfort, luxury, and sustainability.</p>
        <p>Our flagship project, *Capital Gateway*, is more than just a residential complex; it’s a sanctuary designed to offer a harmonious balance between modern living and serene environments. Situated near Amaravati, Capital Gateway brings together state-of-the-art amenities, thoughtfully designed spaces, and a vibrant community, setting a new standard for urban living.</p>
        <p>At Aryavarta, we don’t just build homes; we build dreams, nurture communities, and inspire a future where every resident feels a sense of belonging and pride. Join us in experiencing a lifestyle that transcends expectations.</p>
      </div>
      <div className="right">
        <img src={image} alt="" className='aboutimage' />
      </div>
    </div>
  );
};

export default Aboutus;
