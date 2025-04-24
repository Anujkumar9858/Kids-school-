import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css';
import PaperPlane from './Image/paper-plane.png';
import KidsImage from './Image/KidsImage.png';
import Cloud1 from './Image/cloud1.png';
import Cloud2 from './Image/cloud2.png';
import Cloud3 from './Image/cloud3.png';

const Hero = () => (
  <section id="home" className="hero-sections">
    <Container className="text-center hero-containers">
      <div><img src={Cloud1} alt="cloud" className="cloud cloud1" /></div> 
      <div><img src={Cloud2} alt="cloud" className="cloud cloud2" /></div> 
      <div><img src={Cloud3} alt="cloud" className="cloud cloud3" /></div> 
      
      <h1 className="hero-title">
        The best place to <br /><span className="learn-text">learn</span>
        <span className="and-space"> and </span>
        <span className="play-text">play</span><br /> for kids
      </h1>

      <img src={PaperPlane} alt="paper plane" className="paper-plane" />
      
      <p className="hero-subtitle">
        Where tiny Steps leads to Big dreams<br />
        Because Every Child Deserves a Magical Start!
      </p>

      <Button className="enroll-btns">
        Enroll <span className="arrow-icon">↗</span>
      </Button>

       <img src={KidsImage} alt="happy kids" className="kids-img" />
      {/* <img 
        src='https://www.shutterstock.com/shutterstock/photos/2203220633/display_1500/stock-vector-good-little-kid-helping-friend-that-falling-on-the-floor-2203220633.jpg' 
        alt="happy kids" 
        className="kids-img" 
      /> */}
    </Container>
  </section>
);

export default Hero;
