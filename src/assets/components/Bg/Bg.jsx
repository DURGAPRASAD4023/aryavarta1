import React from 'react';
import './Bg.css';
import arrow from '../../assets/arrow-right.png';
import { Link } from 'react-scroll';

const Bg = () => {
  
  return (
    <div id='home' className='main1 container'>
      <div className='bg-text'>
        <h1>
          The <span>Art</span> Of Fine <span>Living</span>.....
        </h1>
        <p>
          At Aryavarta Developers, we are committed to build exceptional
          living spaces that blend modern design, comfort, and
          sustainability. With a focus on quality and community, our projects
          are thoughtfully crafted to offer a lifestyle of luxury, tranquility, and
          convenience.
        </p>
        <Link 
          to='projects' 
          smooth={true} 
          offset={-100} // Adjust offset if necessary
          duration={500} 
          className='btn'
        >
          Explore more... <img src={arrow} alt='arrow' />
        </Link>
      </div>
    </div>
  );
};

export default Bg;
