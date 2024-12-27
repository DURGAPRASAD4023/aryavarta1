import React, { useRef, useState } from 'react';
import './Services.css';
import img1 from '../../assets/archi.png';
import img2 from '../../assets/ecofrnd.png';
import img3 from '../../assets/amin.png';
import img4 from '../../assets/mang.png';
import img5 from '../../assets/safe.png';
import img11 from '../../assets/next.png';
import img12 from '../../assets/back.png';


const servicesData = [
    {
      img: img1,
      title: "Architectural excellence",
      description: "Delivering thoughtfully planned layouts and innovative designs that maximize space, natural light, and ventilation, ensuring your home is as functional as it is beautiful."
    },
    {
      img: img2,
      title: "Eco-Friendly Construction",
      description: "Incorporating sustainable materials and green practices, we create living spaces that contribute to environmental conservation without compromising on luxury."
    },
    {
      img: img3,
      title: "Providing world-class amenities",
      description: "Rooftop swimming pool ,Fully equipped gym ,Meditation and yoga rooms ,Multipurpose halls,Children's play areas"
    },
    {
      img: img4,
      title: "Maintenance and Management",
      description: "Offering dedicated maintenance services to keep your property in pristine condition and ensure uninterrupted comfort for residents."
    },
    {
      img: img5,
      title: "Safety and Security",
      description: "Ensuring 24x7 security with advanced surveillance systems and secure gated entrances, offering peace of mind for you and your family."
    }
  ];
  
  const Services = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0);
    const totalSlides = servicesData.length;
    const slideWidth = 100 / totalSlides;
  
    const nextForward = () => {
      if (tx > -(totalSlides - 1) * slideWidth) {
        setTx(tx - slideWidth);
      }
    };
  
    const nextBackward = () => {
      if (tx < 0) {
        setTx(tx + slideWidth);
      }
    };
  
    return (
      <div className="Services">
        <img src={img11} alt="Next" className="nbtn" onClick={nextBackward} />
        <img src={img12} alt="Back" className="bbtn" onClick={nextForward} />
        <div className="slider">
          <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
            {servicesData.map((service, index) => (
              <li key={index}>
                <div className="slide">
                  <div className="service1">
                    <img src={service.img} alt={service.title} />
                    <div>
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Services;
  