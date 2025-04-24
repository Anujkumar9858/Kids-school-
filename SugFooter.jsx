import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './SugFooter.css';

const Footer1 = () => (
    <footer className="footer-section">
        <div className="footer-main py-5" >
            <Container>
                <Row>
                    <Col lg={4} md={6} className="mb-4 mb-md-0">
                        <h3 className="footer-heading">School Name</h3>
                        <p className="footer-about">
                            We provide a nurturing environment where children discover the joy of learning through play, creativity, and exploration.
                        </p>
                    </Col>

                    <Col lg={2} md={6} className="mb-4 mb-md-0">
                        <h4 className="footer-subheading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/admissions">Admissions</a></li>
                            <li><a href="/programs">Programs</a></li>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h4 className="footer-subheading">Programs</h4>
                        <ul className="footer-links">
                            <li><a href="/playgroup">Playgroup</a></li>
                            <li><a href="/nursery">Nursery</a></li>
                            <li><a href="/kindergarten">Kindergarten</a></li>
                            <li><a href="/elementary">Elementary School</a></li>
                            <li><a href="/after-school">After School Care</a></li>
                            <li><a href="/summer-camp">Summer Camp</a></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={6}>
                        <h4 className="footer-subheading">Contact With Us</h4>
                        <br />
                        <div className="newsletter ">
                            <h5>Subscribe to Newsletter</h5>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Your Email" />
                                <div className="social-icons">
                            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                            <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
                        </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="footer-bottom py-3">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-3 mb-md-0">
                        <p className="mb-0">&copy; 2025 School Name. All rights reserved.</p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <ul className="footer-legal">
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/sitemap">Sitemap</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
);

export default Footer1;