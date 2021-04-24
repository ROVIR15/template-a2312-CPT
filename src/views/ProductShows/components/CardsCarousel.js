import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from './Card';

function CardsCarousel() {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
    >
      {
        [0,2,3].map(function() {
          return (
            <Card />
          )
        })
      }
    </Carousel>
  )
}

export default CardsCarousel;