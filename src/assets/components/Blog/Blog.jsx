import React, { useEffect } from 'react';
import './Blog.css';
import img from '../../assets/aryavartalogo.png';

const Blog = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.cont');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.5, // Trigger animation when 50% of the element is in view
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <div className='blog'>
      <div className="cont left1">
        <img src={img} alt="" />
        <div className="tbox">
          <h2>The Art of High-Rise Living</h2>
          <small></small>
          <p>Benefits You’ll Love
Discover how high-rise apartments combine privacy, luxury, and stunning views to redefine urban living.</p>
          <span className='larrow'></span>
        </div>
      </div>

      <div className="cont right1">
        <img src={img} alt="" />
        <div className="tbox">
          <h2>Designing for Comfort</h2>
          <small></small>
          <p>Inside the Thoughtful Layouts of Capital Gateway

An in-depth look at how Aryavarta’s homes are designed to meet the needs of modern families.</p>
          <span className='rarrow'></span>
        </div>
      </div>

      <div className="cont left1">
        <img src={img} alt="" />
        <div className="tbox">
          <h2>Building a Sustainable Future</h2>
          <small></small>
          <p>Aryavarta’s Green Practices
          Aryavarta Developers prioritize sustainability by integrating eco-friendly materials, energy-efficient systems, and green spaces, creating homes that harmonize with nature and promote a sustainable future</p>
          <span className='larrow'></span>
        </div>
      </div>

      <div className="cont right1">
        <img src={img} alt="" />
        <div className="tbox">
          <h2>Family-Friendly Communities</h2>
          <small></small>
          <p>A Perfect Space for Children to Thrive
          Aryavarta is designed with families in mind, offering secure play areas, lush green spaces, and community-centric amenities that nurture growth, connection, and happiness for every member.</p>
          <span className='rarrow'></span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
