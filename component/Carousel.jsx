import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


 import slide2 from './img/slide2';

const CustomCarousel = () => {

  const carouselStyles = {
    maxHeight: ' auto', // Adjust the maximum height as needed
  };

  return (
    <Carousel autoPlay infiniteLoop style={carouselStyles}>
      <div>
        <img src={slide2}  alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg" alt="Slide 3" />
        
      </div>
    </Carousel>
  );
};


export default CustomCarousel;


