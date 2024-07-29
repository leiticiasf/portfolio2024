 import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
 import { DevCards } from "./ProjectsCardsTech";
 import fotoCalcReact from "../assets/tecnicoImg/calculadoraReact.png";
 import fotoCasoUML from "../assets/tecnicoImg/casoDeUso.png";
 import fotoPostman from "../assets/tecnicoImg/post.png";
 import fotoCRM from "../assets/tecnicoImg/implantacao.png"
 import React, {useState} from "react";
export const DevProjects = () => { /* Parte Desenvolvimento de Sistemas*/

const [selectedCategory, setSelectedCategory] = useState("null");
const [selectedTrimestre, setSelectedTrimestre] = useState("primeiro");

    const ads = [
        {
            title: "Calculadora de Horas",
            description: "Neste trabalho nós fizemos uma calculadora de horas em React. Foi o meu primeiro contato com React, gostei bastante em aprender sobre esta biblioteca, se tornou preferível na hora de criar projetos.",
            imgUrl: fotoCalcReact,
            link: "https://github.com/leiticiasf/calculadoraReact",
            trimestre: "primeiro"
        },
        {
            title: "Postman",
            description: "Primeiro contato com JAVA e Banco de Dados. Mesmo sendo apenas o básico, gostei bastante, é uma linguagem bem regrada mas eu gosto de coisas assim, em que não tem meio termo.",
            imgUrl: fotoPostman,
            trimestre: "primeiro"

        },
   
    ];      
    
    const modelagem = [
        {
            title:"Caso de Uso SA",
            description: "Esta atividade tinha como requerimento que nós criássemos um diagrama UML que explicasse o funcionamento do nosso site da SA. Foi um momento bem desesperador pensar nesse diagrama, mas conforme eu e meu grupo começamos a desenvolver, se tornou algo legal de fazer, exigiu uma parte da minha capacidade mental que eu venho buscando desenvolver a um tempo. ",  
            imgUrl: fotoCasoUML,
            link: "https://lucid.app/lucidchart/d44af6f0-98d9-4c0b-b85c-38a961aa19c7/edit?viewport_loc=-201%2C399%2C1993%2C789%2C0_0&invitationId=inv_17bc7a94-ccf2-4de0-af71-5722ce18cc03",  
            trimestre: "primeiro"

        }                                                       
    ]

    const ims = [
        {
            title: "CRM",
            description: "Nesta atividade nós criamos um cronograma como uma equipe de Implantação para então iniciar um Projeto de Implantação do sistema CRM, ainda em Desenvolvimento, para que todas as atividades necessárias para a implantação fossem coordenadas pela nossa  equipe, garantindo que a implantação por módulos seja realizada com sucesso. Apesar de ser um trabalho extenso, gostei de ver a forma como são organizados os projetos no mundo real de trabalho.",
            imgUrl: fotoCRM,
            trimestre: "primeiro"

        }
    ]


return(
    <section className="project" id="project">
        <Container>
        <Row>
            <Col>
          
          <h2>Projetos Curso Técnico</h2>

          <button className="trimestre" onClick={() => setSelectedTrimestre("primeiro")}>
            <span>1º Trimestre</span>
            </button>
            <button className="trimestre" onClick={() => setSelectedTrimestre("segundo")}>
            <span>2º Trimestre</span>
            </button>
            <button className="trimestre" onClick={() => setSelectedTrimestre("terceiro")}>
            <span>3º Trimestre</span>
            </button>
          <p>Principais atividades ocorridas ao longo do ano</p>

            <Tab.Container id="projects-tabs" activeKey={selectedCategory} onSelect={(key) => setSelectedCategory(key)}>
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center alignt-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="ads">Desen. de Sistemas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="ims"> Impl. e Manu. de Sistemas </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="modelagem" > Modelagem de Sistemas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="sa" > SA </Nav.Link>
                </Nav.Item>
              
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="ads">
                   <Row>
                    {selectedCategory === "ads" &&
                          ads.filter(ads => ads.trimestre === selectedTrimestre).map((ads, index) => (
                               <DevCards
                                key={index}
                                {...ads} />
                            ))}
                    
                   </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="modelagem">
                    <Row>
                        {selectedCategory === "modelagem" &&
                           modelagem.filter(modelagem => modelagem.trimestre === selectedTrimestre).map((modelagem, index) => (
                                    <DevCards 
                                    key={index}
                                    {...modelagem} />
                                ))}
                            
                        
                    </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="ims">
                    <Row>
                        {selectedCategory === "ims" &&
                        ims.filter(ims => ims.trimestre === selectedTrimestre).map((ims, index) => (
                                    <DevCards 
                                    key={index}
                                    {...ims} />
                                )
                            )
                        }
                    </Row>
                </Tab.Pane>

            
            </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
        </Container>
    </section>
)
}