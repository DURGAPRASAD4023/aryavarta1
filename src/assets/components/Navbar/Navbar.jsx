import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/aryavartalogo.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 150 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = (e) => {
    if (mobileMenu && !e.target.closest('nav')) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, [mobileMenu]);

  return (
    <nav className={`container ${sticky ? 'dknav' : ''}`}>
      <img src={logo} alt='Aryavarta Logo' className='Logo' />
      <ul className={mobileMenu ? '' : 'hidemenu'}>
        <li><Link className='btn' to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link className='btn' to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
        <li><Link className='btn' to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link className='btn' to='gallary' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
        <li><Link className='btn' to='Services' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link className='btn' to='blog' smooth={true} offset={-260} duration={500}>Blog</Link></li>
        <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
      </ul>
      <img src={menu} alt='Menu Icon' className='menuicon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
