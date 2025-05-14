import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pictureOne from './assets/picture-one.jpeg';
import pictureTwo from './assets/picture-two.jpeg';
import pictureThree from './assets/picture-three.jpeg';
import pictureFour from './assets/picture-four.jpeg';
import pictureFive from './assets/picture-five.jpeg';
import pictureSix from './assets/picture-six.jpeg';
import video from './assets/video-one.mp4';
import './MyCarousel.css'
const MyCarousel = () => {
    return (
        <div className='contained' >
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div>
                    <img className='custom' src={pictureOne} alt="Slide 1" />
                </div>
                <div>
                    <img src={pictureTwo} alt="Slide 2" />
                </div>
                <div>
                    <img src={pictureThree} alt="Slide 3" />
                </div>
                <div>
                    <img src={pictureFour} alt="Slide 4" />
                </div>
                <div>
                    <img src={pictureFive} alt="Slide 5" />
                </div>
                <div>
                    <img src={pictureSix} alt="Slide 6" />
                </div>
               
            </Carousel>
        </div>
    );
};

export default MyCarousel;

