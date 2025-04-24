import React, { useEffect, useRef } from 'react';
import './Teacher.css';

const teachers = [
  {
    id: 1,
    name: 'Ms. Priya Sharma',
    subject: 'Kindergarten',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600'
  },
  {
    id: 2,
    name: 'Mr. Raj Patel',
    subject: 'Mathematics',
    photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600'
  },
  {
    id: 3,
    name: 'Ms. Ananya Gupta',
    subject: 'English & Arts',
    photo: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600'
  },
  {
    id: 4,
    name: 'Mr. Arjun Singh',
    subject: 'Science',
    photo: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=600'
  },
  {
    id: 5,
    name: 'Ms. Neha Kapoor',
    subject: 'Music',
    photo: 'https://images.unsplash.com/photo-1744616450893-154cf0b4c418?w=600'
  },
  {
    id: 6,
    name: 'Mr. Vikram Joshi',
    subject: 'Sports',
    photo: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600'
  }
];

const Teachers = () => {
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollContentRef.current;

    scrollContent.innerHTML += scrollContent.innerHTML;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContent.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    const pauseScroll = () => cancelAnimationFrame(animationRef.current);
    const resumeScroll = () => animationRef.current = requestAnimationFrame(scroll);

    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);

    return () => {
      cancelAnimationFrame(animationRef.current);
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
    };
  }, []);

  return (
    <section id="staff" className="teachers-section">
      <div className='px-5'>
        <div className="header-text text-center py-4">
          <h1>
            Meet the Ones Who Make It All Happen<br />
            <span className="caring">Friendly, fun</span> and <span className="playful">full of love</span><br />
            Meet the mentors your kids will adore!
          </h1>
        </div>

        <div className="teachers-scroll-container" ref={scrollContainerRef}>
          <div className="teachers-scroll-content" ref={scrollContentRef}>
            {[...teachers, ...teachers].map((teacher, index) => (
              <div key={`${teacher.id}-${index}`} className="teacher-profile">
                <div className="photo-container">
                  <img src={teacher.photo} alt={teacher.name} className="teacher-photo" />
                </div>
                <div className="teacher-details">
                  <h3 className="teacher-name">{teacher.name}</h3>
                  <p className="teacher-subject">{teacher.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
