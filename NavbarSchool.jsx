import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarSchool.css';

const NavbarSchool = () => {
  const [activeKey, setActiveKey] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`school-navbar px-8 ${scrolled ? 'scrolled' : ''}`}
      fixed="top"
    >
      <Navbar.Brand href="#home" className="navbar-brand">
        <div className="brand-logo"></div>
        <span className="brand-name">Playschool</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav
          className="ms-auto align-items-center nav-links-group"
          activeKey={activeKey}
          onSelect={handleSelect}
        >
          <Nav.Link eventKey="home" href="#home" className={`nav-link ${activeKey === 'home' ? 'active' : ''}`}>
            Home
          </Nav.Link>
          <Nav.Link eventKey="staff" href="#staff" className={`nav-link ${activeKey === 'staff' ? 'active' : ''}`}>
            Staff
          </Nav.Link>
          <Nav.Link eventKey="gallery" href="#gallery" className={`nav-link ${activeKey === 'gallery' ? 'active' : ''}`}>
            Gallery
          </Nav.Link>
          <Nav.Link eventKey="admission" href="#admission" className={`nav-link ${activeKey === 'admission' ? 'active' : ''}`}>
            Admission
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Nav.Link href="#contact" className="cta-button px-16">
        Contact
      </Nav.Link>
    </Navbar>
  );
};

export default NavbarSchool;
