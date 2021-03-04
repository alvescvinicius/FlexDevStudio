import React, { Component } from 'react';
import { Carousel, Container, } from 'react-bootstrap';
import './home.css';

import imgSlide1 from './img/pexels-photo-546819.jpeg';
import imgSlide2 from './img/pexels-photo-187041.jpeg';
import imgSlide3 from './img/pexels-photo-577585.jpeg';

class Home extends Component {
    render() {
        return (
                <div className="fds-carousel">
                    <Carousel fade className="fds-fade">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgSlide1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgSlide2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="" //{imgSlide3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
        );
    }
}

export default Home;