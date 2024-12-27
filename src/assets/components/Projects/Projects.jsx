import React from 'react'
import './Projects.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img4 from '../../assets/img4.png'
import img3 from '../../assets/img5.png'


const Projects = () => {
  return (
    <div className='projects'>
        <div className="project1">
            <img src={img1} alt="" />
            <div className="caption">
                <p>Capital Gateway</p>
            </div>
            <div className="matter">
                <p>A sanctuary of modern living, blending luxury, tranquility, and community. Experience unparalleled comfort and sophistication in the heart of Amaravati</p>

            </div>
            </div>
            <div className="project1">
            <img src={img2} alt="" />
            <div className="caption">
               
            </div>
            <div className="matter">
                <p> Capital Gateway's thoughtfully designed architecture blends elegance and functionality, offering a bird's-eye perspective of your serene, gated community</p>
                </div>
            </div> 
              <div className="project1">
                                <img src={img4} alt="" />
                                <div className="caption">
                                    
                                </div>
                                <div className="matter">
                                    <p>Behold the stunning elevation of Capital Gateway. A masterpiece of modern architecture, seamlessly blending style, innovation, and timeless elegance in a vibrant gated community.</p>
                                    
                                    </div>
                                </div>
                                <div className="project1">
                                <img src={img3} alt="" />
                                <div className="caption">
                                   
                                </div>
                                <div className="matter">
                                    <p>Explore our thoughtfully designed 2BHK, 3BHK, and 4BHK layouts, offering optimal space utilization, modern aesthetics, and functional elegance to suit every lifestyle and need</p>
                                    
                                    </div>
                                </div>
                                
            
    </div>
    
  )
}

export default Projects