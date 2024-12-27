// App.js
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar/Navbar';
import Bg from './assets/components/Bg/Bg';
import Projects from './assets/components/Projects/Projects';
import Title from './assets/components/Title/Title';
import Aboutus from './assets/components/Aboutus/Aboutus';
import Gallary from './assets/components/Gallary/Gallary';
import Services from './assets/components/Services/Services';
import Blog from './assets/components/Blog/Blog';
import Contact from './assets/components/Contact/Contact';
import Fotter from './assets/components/Fotter/Fotter';
import WattsApp from './assets/components/watsapp/wattsapp';
import Plan from './assets/components/Plan/Plan';
import PA from './assets/components/Plan/PA';  // Ensure the correct import

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Bg />
      <Title subtit="Our Masterstrokes" title="Capital GateWay" />
      <Projects />
      <Aboutus />
      <Plan />
      <Title subtit="Gallary" title="Construction Diary" />
      <Gallary />
      <Title subtit="Services" title="Deliverables" />
      <Services />
      <Title subtit="Blog related company" title="Blog" />
      <Blog />
      <Title subtit="Contact Us" title="Get In Touch" />
      <Contact />
      <Fotter />
      <WattsApp />
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const disableSelection = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.type === 'mousedown' || e.type === 'mousemove' || e.type === 'selectstart') {
        e.preventDefault(); // Prevent text selection or dragging of content
      }
    };

    // Add event listeners to block text selection and dragging
    window.addEventListener('mousedown', disableSelection);
    window.addEventListener('mousemove', disableSelection);
    window.addEventListener('selectstart', disableSelection);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mousedown', disableSelection);
      window.removeEventListener('mousemove', disableSelection);
      window.removeEventListener('selectstart', disableSelection);
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />  {/* Main page */}
        <Route path="/PA" element={<PA />} />  {/* PA route */}
      </Routes>
    </div>
  );
};

export default App;
