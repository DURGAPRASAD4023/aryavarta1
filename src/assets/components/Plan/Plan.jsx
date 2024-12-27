import React, { useState } from 'react';
import './Plan.css';
import { Link } from 'react-router-dom'; // Correct import for navigation

const Plan = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setDownloadProgress(progress);
      if (progress >= 110) {
        clearInterval(interval);
  
        // Initiate PDF download
        const link = document.createElement('a');
        link.href = '/brochurec.pdf'; // Public folder path
        link.download = 'brochurec.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        // Optional: Reset download progress after a short delay
        setTimeout(() => {
          setDownloadProgress(0);
        }, 1000);
      }
    }, 300); // Simulate download speed
  };
  
  return (
    <div className="plan">
      <ul>
        <li>
          <Link to="/PA" className="but plans-button">Plans</Link>
        </li>
      </ul>
      <button onClick={handleDownload} className="but download-button">
        {downloadProgress < 110 ? `Download Brochure (${downloadProgress}%)` : 'Download Complete!'}
      </button>
    </div>
  );
  
};

export default Plan;
