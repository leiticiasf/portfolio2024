// src/Skills.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import cyber from "../assets/img/cyber.jpg";
import python from "../assets/img/python.jpg";
import linux from "../assets/img/linux.jpg";
import ImageZoom from './ImageZoom'; // Importa o componente ImageZoom

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
                                        <h5>Curso de Inglês</h5>
                                    </div>
                                    <div className="item">
                                        <h5>Prova Cambridge</h5>
                                    </div>
                                    <div className="item">
                                        <ImageZoom src={python} alt="Python Essentials" />
                                        <h5>Python Essentials</h5>
                                    </div>
                                    <div className="item">
                                        <ImageZoom src={linux} alt="Introdução ao Linux" />
                                        <h5>Introdução ao Linux</h5>
                                    </div>
                                    <div className="item">
                                        <ImageZoom src={cyber} alt="Introdução a Cibersegurança" />
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

//       import Carousel from "react-multi-carousel";
// import { Container, Row, Col} from 'react-bootstrap';
// import "react-multi-carousel/lib/styles.css";
// import cyber from "../assets/img/cyber.jpg"
// import python from "../assets/img/python.jpg";
// import linux from "../assets/img/linux.jpg";
// import { useState } from "react";



// export const Skills =  () => {
//     const responsive = {
//         superLargeDesktop: {

//             breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };

//       const [transform, setTransform] = useState('scale(1)');

//       const handleMouseMove = (e) => {
//           const container = e.currentTarget;
//           const { left, top, width, height } = container.getBoundingClientRect();
//           const x = e.clientX - left;
//           const y = e.clientY - top;
  
//           const xPercent = (x / width) * 100;
//           const yPercent = (y / height) * 100;
  
//           setTransform(`scale(2) translate(-${xPercent}%, -${yPercent}%)`);
//       };
  
//       const handleMouseLeave = () => {
//           setTransform('scale(1)');
//       };

//       return(
//         <section className="skill" id="skills"> 
         

//             <Container>
//                 <Row>
//                     <Col>
//                     <br></br>
//                         <div className="skills-bx">
//                                 <h2>  
//                                 Skills
//                             <p>Cursos e certificados</p> 
//                             <Carousel responsive={responsive} infinite={true} className="skill-slider">
//                                             <div
//                             className="image-zoom-container"
//                             onMouseMove={handleMouseMove}
//                             onMouseLeave={handleMouseLeave}>
        
//                                   <div className="item">
//                                     <h5>Curso de Inglês</h5>
//                                   </div>
//                                     <div className="item"  style={{ transform }}>
//                                       <h5>Prova Cambridge</h5>
//                                   </div>
//                                     <div className="item"  style={{ transform }}>
//                                     <img src={python}/>
//                                       <h5>Python Essentials</h5>
//                                   </div> 
//                                     <div className="item"  style={{ transform }}>
//                                     <img src={linux}/>
//                                       <h5>Introdução ao Linux</h5>
//                                   </div>
//                                     <div className="item"  style={{ transform }}>
//                                     <img src={cyber}/>
//                                       <h5>Introdução a Cibersegurança</h5>
//                                   </div> 
//                                   </div>
//                                 </Carousel>
//                             </h2>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>

//             </section>
//       )
//       }
