import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1742456605883-ebace0f3df99?w=600&auto=format&fit=crop&q=60',
    alt: 'Children in classroom activity',
    category: 'classroom'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1630143155976-3ff896b1db57?w=600&auto=format&fit=crop&q=60',
    alt: 'School playground',
    category: 'facilities'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1639369501176-f40a0641c91f?w=600&auto=format&fit=crop&q=60',
    alt: 'Annual day performance',
    category: 'events'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1661260100649-7e994335cdb9?w=600&auto=format&fit=crop&q=60',
    alt: 'Science fair exhibition',
    category: 'activities'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1700914297022-7b58be7ffc4f?w=600&auto=format&fit=crop&q=60',
    alt: 'Sports day competition',
    category: 'sports'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1620679860437-e59fdf6024f4?w=600&auto=format&fit=crop&q=60',
    alt: 'Art and craft display',
    category: 'creativity'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=600&auto=format&fit=crop&q=60',
    alt: 'Field trip excursion',
    category: 'outings'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1678027783638-345d5041b529?w=600&auto=format&fit=crop&q=60',
    alt: 'Music class session',
    category: 'classroom'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?w=600&auto=format&fit=crop&q=60',
    alt: 'Library reading time',
    category: 'facilities'
  }
];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handlePrev = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="gallery-section py-5">
      <Container fluid className="px-lg-5 px-xl-10">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Peek into our world of smiles, <br /> giggles, and joyful learning moments!
          </h2>
          <div className="gallery-filter mt-5">
            {['all', 'classroom', 'sports', 'outings', 'creativity'].map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'outline-primary'}
                onClick={() => setActiveCategory(category)}
                className="me-3 mb-3 filter-btn"
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <Row className="g-4">
          {filteredImages.map(image => (
            <Col lg={4} md={6} key={image.id}>
              <div className="gallery-item" onClick={() => handleImageClick(image)}>
                <img src={image.src} alt={image.alt} className="img-fluid gallery-image" />
                <div className="gallery-overlay">
                  <FaExpand className="zoom-icon" />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          size="lg"
          className="gallery-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage?.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={selectedImage?.src} alt={selectedImage?.alt} className="img-fluid modal-image" />
          </Modal.Body>
          <Modal.Footer className="justify-content-between">
            <Button variant="outline-primary" onClick={handlePrev}>
              <FaChevronLeft className="me-2" /> Previous
            </Button>
            <Button variant="outline-primary" onClick={handleNext}>
              Next <FaChevronRight className="ms-2" />
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Gallery;
