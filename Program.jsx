import React, { useState } from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./Program.css";

const programs = [
  {
    title: "Toddler Program",
    age: "1.5-2.5 years",
    shortDesc: "Gentle playful beginnings with songs, toys, and cuddles",
    fullDesc:
      "Our Toddler Program is designed to provide a warm, nurturing environment where little ones can explore the world through play. We focus on sensory activities, music, movement, and early social skills development in a safe, loving setting.",
    bgColor: "#E0CAF9",
    icon: "🧸",
  },
  {
    title: "Playgroup",
    age: "2.5-3.5 years",
    shortDesc: "Fun filled group activities to spark curiosity and bonding",
    fullDesc:
      "The Playgroup program encourages social interaction and early learning through themed play stations, circle time, and creative expression. Children develop communication skills and make their first friends in our colorful, engaging space.",
    bgColor: "#BBAAF2",
    icon: "🎨",
  },
  {
    title: "Nursery",
    age: "3.5-4.5 years",
    shortDesc: "Learning letters, numbers & confidence through storytelling",
    fullDesc:
      "Our Nursery program introduces foundational concepts through interactive storytelling, hands-on math activities, and phonics games. We nurture each child's natural curiosity while building pre-reading and early math skills.",
    bgColor: "#878787",
    icon: "📚",
  },
  {
    title: "Kindergarten",
    age: "4.5-6 years",
    shortDesc:
      "Prepares children for formal schooling by enhancing critical thinking",
    fullDesc:
      "The Kindergarten program offers a comprehensive curriculum that balances academic readiness with creative expression. Through project-based learning, children develop problem-solving skills, independence, and a lifelong love of learning.",
    bgColor: "#FEC247",
    icon: "🎓",
  },
];

const Programs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleLearnMore = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const scrollToContact = () => {
    setShowModal(false);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="programs-section">
      <div className="px-5">
        {/* Header */}
        <div className="header-text">
          <h1 className="main-headings">Our Programs</h1>
          <p className="sub-heading">Learning Through Love & Play</p>
          <div className="decoration">
            <span className="star">⭐</span>
            <span className="heart">❤️</span>
            <span className="star">⭐</span>
          </div>
        </div>

        {/* Program Cards */}
        <Row className="program-cards">
          {programs.map((program, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card
                className="program-card"
                style={{ backgroundColor: program.bgColor }}
              >
                <Card.Body>
                  <div className="program-content">
                    <div>
                      <div className="program-icon">{program.icon}</div>
                      <h2 className="program-title">{program.title}</h2>
                    </div>
                    <div>
                      <span className="program-age">Age: {program.age}</span>
                      <p className="program-desc">{program.shortDesc}</p>
                    </div>

                    <div>
                      <Button
                        variant="primary"
                        className="program-btn"
                        onClick={() => handleLearnMore(program)}
                      >
                        Learn more →
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Footer Text */}
        <div className="footer-text">
          <h1 className="footer-desc">
            Our programs are thoughtfully designed to foster{" "}
            <span className="footer-span">curiosity</span>,{" "}
            <span className="footer-creativity">creativity</span>, and{" "}
            <span className="footer-confidence">confidence</span> in every
            child.
          </h1>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        {selectedProgram && (
          <>
            <Modal.Header
              closeButton
              style={{ backgroundColor: selectedProgram.bgColor }}
            >
              <Modal.Title className="modal-title">
                <span className="modal-icon">{selectedProgram.icon}</span>
                {selectedProgram.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="modal-age">For ages: {selectedProgram.age}</p>
              <p className="modal-desc">{selectedProgram.fullDesc}</p>
              <div className="modal-features">
                <h4>What your child will experience:</h4>
                <ul>
                  <li>Interactive learning activities</li>
                  <li>Social skill development</li>
                  <li>Creative expression</li>
                  <li>Age-appropriate challenges</li>
                  <li>Lots of fun and laughter!</li>
                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                className="enroll-btn"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
              <Button
                variant="success"
                className="enroll-btn"
                onClick={scrollToContact}
              >
                Enroll Now
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Programs;
