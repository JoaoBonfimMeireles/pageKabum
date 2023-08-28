import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  {
    src: '/assets/img1.png',
    alt: 'Image 1',
  },
  
  {
    src: '/assets/img2.png',
    alt: 'Image 2',
  },

  {
    src: '/assets/img3.png',
    alt: 'Image 3',
  },

  {
    src: '/assets/img4.png',
    alt: 'Image 4',
  },

  {
    src: '/assets/img5.png',
    alt: 'Image 5',
  },

  {
    src: '/assets/img6.png',
    alt: 'Image One',
  },
];

export default function Vitrini() {
  return (
    <div className='vitrini-container'>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={3000}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}