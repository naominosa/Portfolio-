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
        <div  style={{ maxWidth: '400px', height:'90vh', margin: '0 auto', }}>
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
                <div>

                <video loop autoPlay muted width="100%" height="auto">
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
</video>

                </div>
            </Carousel>
        </div>
    );
};

export default MyCarousel;

