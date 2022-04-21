import './style.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



export default function NewCarousel() {
    return(
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100 images"
                src="https://picsum.photos/id/123/200/100"
                alt="First slide"
                />
                <Carousel.Caption>
                {/* <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://picsum.photos/id/123/200/100"
                alt="Second slide"
                />
                <Carousel.Caption>
                {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://picsum.photos/id/123/200/100"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    )
} 