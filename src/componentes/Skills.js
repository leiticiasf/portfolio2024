// src/Skills.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import cyber from "../assets/img/cyber.jpg";
import python from "../assets/img/python.jpg";
import linux from "../assets/img/linux.jpg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-bx">
                            <h2>
                                Skills
                                <p>Cursos e certificados</p>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            
                                    <div className="item">
                                        <img src={python} alt="Python Essentials" />
                                        <h5>Python Essentials</h5>
                                    </div>
                                    <div className="item">
                                        <img src={linux} alt="Introdução ao Linux" />
                                        <h5>Introdução ao Linux</h5>
                                    </div>
                                    <div className="item">
                                        <img src={cyber} alt="Introdução a Cibersegurança" />
                                        <h5>Introdução a Cibersegurança</h5>
                                    </div>
                                </Carousel>
                            </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

