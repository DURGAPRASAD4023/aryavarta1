// PA.jsx
import React from 'react';
import './Plan.css';
import { Link } from 'react-router-dom';
import twoDPlan from '../../assets/2plan.jpg';
import groundFloorPlan from '../../assets/gplan.jpg';
import typicalFloorPlan from '../../assets/tplan.jpg';



const PA = () => {
  return (
    <div className="a">
      <Link to="/" className="c">Back to Home</Link>
      <div className="b">
        <h2>2D Plan</h2>
        <img src={twoDPlan} alt="2D Plan" className="d" />
      </div>
      <div className="b">
        <h2>Ground Floor Plan</h2>
        <img src={groundFloorPlan} alt="Ground Floor Plan" className="d" />
      </div>
      <div className="b">
        <h2>Typical Floor Plan</h2>
        <img src={typicalFloorPlan} alt="Typical Floor Plan" className="d" />
      </div>
    </div>
  );
};

export default PA;
