import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './home.css';

import imgSlide1 from './img/profile.png';

class Home extends Component {
    render() {
        return (
            <div className="fds-carousel">

                <Carousel>

                    <Carousel.Item className="fds-center">

                        <div className="fds-profile">

                            <img src={imgSlide1} />

                            <Carousel.Caption>
                                <h3>Carlos Alves</h3>
                                <p>Analista / Desenvolvedor de sistemas</p>
                            </Carousel.Caption>

                        </div>

                    </Carousel.Item>

                </Carousel>

            </div >
        );
    }
}

export default Home;