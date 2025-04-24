import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Event.css';

const events = [
  { 
    id: 1,
    title: 'Birthday celebration', 
    date: '28th December, 2024', 
    location: 'School Campus',
    shortDesc: 'Our beloved principal\'s birthday is celebrated with our students in a jungle based theme party.',
    fullDesc: 'Our beloved principal\'s birthday is celebrated with our students in a jungle based theme party. The entire school is transformed into a jungle adventure with decorations, animal-themed activities, and special performances by the students. Parents are invited to join the celebration in the afternoon for cake and refreshments.',
    category: 'celebration',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXklMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D'
  },
  { 
    id: 2,
    title: 'Art Competition', 
    date: '10th May, 2024', 
    location: 'School Playground',
    shortDesc: 'Our Art Competition is where imagination runs wild! From finger paints to crayons...',
    fullDesc: 'Our Art Competition is where imagination runs wild! From finger paints to crayons, watercolors to clay modeling, students showcase their creativity in various categories. The event includes live art demonstrations, interactive workshops with professional artists, and an exhibition of all submitted works. Prizes are awarded in different age groups.',
    category: 'arts',
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0JTIwY29tcGV0aXRpb258ZW58MHx8MHx8fDA%3D'
  },
  { 
    id: 3,
    title: 'Annual Functions', 
    date: '4th November, 2024', 
    location: 'Auditorium',
    shortDesc: 'A day filled with laughter, colors, and memories! Our Annual Celebration is a joyful show...',
    fullDesc: 'A day filled with laughter, colors, and memories! Our Annual Celebration is a joyful showcase of student talent featuring dance performances, musical acts, drama presentations, and award ceremonies. The event highlights the year\'s achievements and brings together students, parents, and faculty for an evening of entertainment and celebration.',
    category: 'performance',
    image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwYW5udWFsJTIwZnVuY3Rpb258ZW58MHx8MHx8fDA%3D'
  }
];

const Events = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleEvent = (id) => {
    if (expandedEvent === id) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(id);
    }
  };

  return (
    <section id="events" className="events-section py-5">
      <Container fluid className="px-lg-5 px-xl-10">
        <div className="text-center mb-5">
          <h2 className="section-title">Events & Celebration</h2>
          <p className="section-subtitle">Where every day becomes a memory — from tiny milestones to big celebrations</p>
        </div>

        <Row className="g-4">
          {events.map((event) => (
            <Col lg={4} md={6} key={event.id}>
              <Card className="event-card h-100">
                <div className="event-image-container">
                  <Card.Img variant="top" src={event.image} alt={event.title} />
                </div>
                <Card.Body>
                  <Card.Title className="event-title">{event.title}</Card.Title>
                  
                  <div className="event-meta mb-3">
                    <div className="meta-item">
                      <FaCalendarAlt className="me-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="me-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <Card.Text className="event-desc">
                    {expandedEvent === event.id ? event.fullDesc : event.shortDesc}
                  </Card.Text>
                  <div 
                    className="read-more-link"
                    onClick={() => toggleEvent(event.id)}
                  >
                    {expandedEvent === event.id ? 'Read less' : 'Read more'}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Events;