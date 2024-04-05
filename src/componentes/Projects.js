 import { Container, Row, Col, Nav, Tab, Card} from "react-bootstrap";
 import { Cards } from "./ProjectsCards";
 import fotoMeme from  "../assets/naturezaImg/Memes.png";
 import fotoOrganica from  "../assets/naturezaImg/revisaoOrganica.png";
 import fotoAutoria from  "../assets/naturezaImg/autoria.png";
 import fotoCircuito from  "../assets/naturezaImg/circuito.png";
 import fotoFilme1917 from "../assets/humanasImg/1917.jpg";
 import fotoBandeiraMadagascar from "../assets/humanasImg/bandeira.png";
 import fotoPintura from "../assets/humanasImg/pintura.jpg";
 import fotoPost from "../assets/linguagensImg/conto.jpg";
 import fotoLivro from "../assets/linguagensImg/livro.jpg";
 import fotoAv1Mtm from "../assets/matematicaImg/Mapa.png";
import React, { useState } from "react";

  
export const Projects = () => { /* Parte Natureza*/

const [selectedCategory, setSelectedCategory] = useState("null");
const [selectedTrimestre, setSelectedTrimestre] = useState("primeiro");

    const natureza = [
        {
            title: "Atividade Biologia",
            description: "Meme sobre evolucionismo.",
            imgUrl: fotoMeme,
            link: "https://www.canva.com/design/DAF-u7idW64/JRRP6Lr7weS-WB_vzXKVFQ/edit?utm_content=DAF-u7idW64&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            trimestre: "primeiro"
        },
        {
            title: "Atividade 2",
            description: "Apresentação de uma revisão sobre química orgânica.",
            imgUrl: fotoOrganica,
            link: "https://docs.google.com/presentation/d/14Vx3aqsnkBRJZKg75W40nZ45MMyyvhsWnyX9g_DmrEs/edit?usp=classroom_web&authuser=0",
            trimestre: "primeiro"

        },
        {
            title: "Atividade 3",
            description: "Atividade prática de circuitos e resistores.",
            imgUrl: fotoCircuito,
            link: "https://docs.google.com/document/d/1CV-GYZ9_vD-cs5GbQqaRbUw4TZKUeEzgbXZwvH4eo88/edit?usp=gmail",
            trimestre: "primeiro"

        },
        {
            title: "Atividade 4",
            description: "Uma 'autoria' a partir da explicação \n durante a aula de Evolução e Teorias Evolucionistas.",
            imgUrl: fotoAutoria, 
            link: "https://docs.google.com/document/d/1h5dyq6SbD9ZF4406HQ0Dt7itMWpMOrHRlOweCz0A2H0/edit?usp=drive_link",
            trimestre: "primeiro"

        },
    ];
    const humanas = [
        {
            title: "Review Filme 1917",
            description: "Neste dia, assistimos o filme 1917 pois o \n mesmo retrata de uma época a qual estamos \n estudando e depois respondemos um questionário sobre o filme.",
            imgUrl: fotoFilme1917,
            trimestre: "primeiro",
        },
        {
            title:  "Introdução à Geopolítica",
            description: "Escolhemos um país do qual deveríamos fazer uma apresentação \n falando sobre a situação atual do país.",
            imgUrl: fotoBandeiraMadagascar,
            link: "https://docs.google.com/presentation/d/1dwZV5mdLD-fFOPZFDIsrQBRoYr9vpUWh8YdFACdEAhM/edit?usp=classroom_web&authuser=0",
            trimestre: "primeiro"

        },
        {
            title: "O Imperialismo na América",
            description: "Esta atividade requereu que nós fizessémos a análise de uma determinada imagem dada durante a aula para refletirmos em sala.  ",
            imgUrl: fotoPintura,
            link: "https://docs.google.com/document/d/1HN822HfWsRRpgmdv9IiM2XrpMgPL78rtLNoKDbVBUj0/edit?usp=classroom_web&authuser=0",
            trimestre: "primeiro"

        },
       
    ];
    const linguagens = [
    
        {
            title:"Atividade Simple Past - Miniconto em Inglês",
            description:"Nessa atividade nós criamos um cartaz em formato de post do Instagram contando em forma de mini conto a história por trás da imagem que recebemos. ",
            imgUrl: fotoPost,
            trimestre: "primeiro"

        },
        {
            title: "Pré-Modernismo",
            description: "Escolhemos uma obra do período pré-modernista e fizemos uma apresentação sobre ela.",
            imgUrl: fotoLivro,
            link: "https://www.canva.com/design/DAF-RUA3r9U/N0aYX2y9DmzXmZeRtIT3JA/edit?utm_content=DAF-RUA3r9U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            trimestre: "primeiro"

            
        }
    ]
    const matematica = [
        {
            title: "Arcos e Ângulos",
            description: "Produzimos um trilha dentro do ambiente da escola utilizando os conceitos de Arcos e Âgulos contando uma história por trás desta trilha. Competências e habilidades: C2 -Reconhecer e utilizar a linguagem algébrica e suas representações como a linguagem das ciências, necessária para expressar a relação entre grandezas e criar modelos descritivos permitindo conexões da matemática, com em fenômenos, sistemas naturais e tecnológicos.H 5- Ler e interpretar diferentes linguagens e representações envolvendo variações de grandezas; H 16- Compreender e construir modelos que correspondem a fenômenos periódicos.   ",
            imgUrl: fotoAv1Mtm,
            link: "https://drive.google.com/file/d/12u5vl9DJyl-sXnJOfnOTBBAfvrZCsowM/view?usp=sharing",
            trimestre: "primeiro"

        }
    ]


return(
    <section className="project" id="project">
        <Container>
        <Row>
            <Col>
          
          <h2 id="projetos">Projetos</h2>

          <button className="trimestre" onClick={() => setSelectedTrimestre("primeiro")}> 
            <span>1º Trimestre</span> &nbsp;  
        </button>
            <button className="trimestre" onClick={() => setSelectedTrimestre("segundo")}>
            <span>2º Trimestre</span> &nbsp;  
            </button>
            <button className="trimestre" onClick={() => setSelectedTrimestre("terceiro")}>
            <span>3º Trimestre</span>
           </button>
          <p>Jazem aqui as principais atividades ocorridas ao longo do ano</p>

            <Tab.Container id="projects-tabs" activeKey={selectedCategory} onSelect={(key) => setSelectedCategory(key)}>

            <Nav variant="pills" className="nav-pills mb-5 justify-content-center alignt-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link   eventKey="natureza">Natureza</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="matematica"> Matemática </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="linguagens" > Linguagens</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="humanas" > Humanas </Nav.Link>
                </Nav.Item>
              
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="natureza">
                   <Row>
                    
                          {selectedCategory === "natureza" &&
                          natureza.filter(natureza => natureza.trimestre === selectedTrimestre).map((natureza, index) => (
                               <Cards
                                key={index}
                                {...natureza} />
                            ))}
                    
                   </Row>
                </Tab.Pane>
                   <Tab.Pane eventKey="humanas">
                   <Row>
                    
                        {selectedCategory === "humanas" &&
                        humanas.filter(humanas => humanas.trimestre === selectedTrimestre).map((humanas, index) => (
                               <Cards
                                key={index}
                                {...humanas} />
                            
                        ))}

                   </Row>
                   </Tab.Pane>

                   <Tab.Pane eventKey="linguagens">
                    <Row>
                        {selectedCategory === "linguagens" &&

                        linguagens.filter(linguagens => linguagens.trimestre === selectedTrimestre).map((linguagens, index) => (
                                    <Cards 
                                    key={index}
                                    {...linguagens} />
                                ))}
   
                        
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="matematica">
                    <Row>
                        {selectedCategory === "matematica" &&
                        matematica.filter(matematica => matematica.trimestre === selectedTrimestre).map((matematica, index) => (
                                     <Cards
                                    key={index}
                                    {...matematica} />
                                ))}
                
                    </Row>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
        </Container>
    </section>
)}
