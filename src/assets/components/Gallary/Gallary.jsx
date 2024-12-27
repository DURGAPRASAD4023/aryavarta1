import React from 'react'
import './Gallary.css'
import img1 from '../../assets/gallery1.png'
import img2 from '../../assets/galley2.png'
import img3 from '../../assets/galley3.png'
import img4 from '../../assets/gallery4.png'

const Gallary = () => {
  return (
    <div className='gallary'>
      
        <div className="gallary1">
            <img src={img1} alt="" className='im' />
            
        </div>
        <div className="gallary1">
            <img src={img2} alt="" className='im' />
            
        </div>
        <div className="gallary1">
            <img src={img3} alt="" className='im' />
            
        </div>
        <div className="gallary1">
            <img src={img4} alt="" className='im' />
            </div>
            
        
      
        
        
    </div>
  )
}

export default Gallary