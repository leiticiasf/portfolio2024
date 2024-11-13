import cardapio from "../assets/ppe/cardapio.jpg";
import falarPublico from "../assets/ppe/certificado.jpg";
import React from 'react';
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';

export const Ppe = () => {

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
                    <div className="ppe-bx">
                    <h2> Plano Pessoal de Estudos</h2> <br/>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    
                                <div id="certificado">
                                    <img src={falarPublico} alt="Certificado de falar em público" /> <br/><br/>
                                <h5> Certificado sobre falar em público</h5>                    
                                </div>
                                <div id="certificado2">
                                    <img src={cardapio} alt="Certificado de montar cardápios" /> <br/> <br/>
                                    <h5> Certificado sobre montar cardápios</h5>                    

                                </div>
                            
                            </Carousel>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    )
}