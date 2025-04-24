import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFileAlt, FaUserFriends, FaCheckCircle, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import './Admission.css';

const admissionSteps = [
  {
    step: 1,
    title: "Inquiry & Visit",
    description: "Schedule a school tour to see our facilities and meet our staff",
    icon: <FaPhoneAlt className="step-icon" />,
    duration: "1-2 days"
  },
  {
    step: 2,
    title: "Application",
    description: "Complete our online or paper application form with required documents",
    icon: <FaFileAlt className="step-icon" />,
    duration: "2-3 days"
  },
  {
    step: 3,
    title: "Assessment",
    description: "Friendly interaction session to understand your child's needs",
    icon: <FaUserFriends className="step-icon" />,
    duration: "1 day"
  },
  {
    step: 4,
    title: "Admission Decision",
    description: "Receive confirmation and complete enrollment formalities",
    icon: <FaCheckCircle className="step-icon" />,
    duration: "3-5 days"
  }
];

const Admission = () => (
  <section id="admission" className="admission-section py-5">
    <Container fluid className="px-lg-5 px-xl-10">
      <div className="text-center mb-5">
        <h2 className="section-title">Admission Process</h2>
        <p className="section-subtitle">Simple steps to join our learning community</p>
      </div>

      <Row className="g-4">
        <Col lg={6}>
          <Card className="process-card p-4 h-100">
            <div className="timeline">
              {admissionSteps.map((step) => (
                <div key={step.step} className="timeline-step">
                  <div className="timeline-icon">
                    {step.icon}
                    <div className="step-number">{step.step}</div>
                  </div>
                  <div className="timeline-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                    <div className="duration-badge">
                      <FaCalendarAlt className="me-2" />
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>

        <Col lg={6}>
          <div className="admission-info-card p-4 h-100">
            <h3 className="mb-4">Ready to Apply?</h3>
            <p className="info-text">
              We're currently accepting applications for the 2024-2025 academic year. 
              Limited seats available in each grade level.
            </p>
            
            <div className="key-dates mt-4">
              <h5>Key Dates:</h5>
              <ul>
                <li>Application Deadline: May 15, 2024</li>
                <li>Assessment Period: May 20-25, 2024</li>
                <li>Admission Results: June 1, 2024</li>
                <li>Orientation Day: August 15, 2024</li>
              </ul>
            </div>

            <div className="documents mt-4">
              <h5>Required Documents:</h5>
              <ul>
                <li>Birth Certificate</li>
                <li>2 Passport Photos</li>
                <li>Previous School Records (if applicable)</li>
                <li>Health Immunization Records</li>
              </ul>
            </div>

            <Button variant="primary" className="mt-4 apply-now-btn">
              Download Application Form
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Admission;
