 import { Container, Row, Col, Nav, Tab} from "react-bootstrap";
 import { DevCards } from "./ProjectsCardsTech";
 import fotoCalcReact from "../assets/tecnicoImg/calculadoraReact.png";
 import fotoCasoUML from "../assets/tecnicoImg/casoDeUso.png";
 import fotoPostman from "../assets/tecnicoImg/post.png";
 import fotoCRM from "../assets/tecnicoImg/implantacao.png";
 import React, {useState} from "react";
 import fotoScrum from '../assets/tecnicoImg/scrum.png';
 import fotoWire from "../assets/tecnicoImg/A.png";
 import fotoRN from "../assets/tecnicoImg/regra.png";
 import fotoModelo from "../assets/tecnicoImg/gus.jpg";
 import fotoGit from "../assets/tecnicoImg/git.jpg";
 import fotoNavigate from "../assets/tecnicoImg/navigate.jpg";
 import fotoBiblioteca from "../assets/tecnicoImg/biblio.jpg";
 import fotoNormalizacao from "../assets/tecnicoImg/normalizacao.jpg";
 import fotoConsultorio from "../assets/tecnicoImg/medico.jpg";

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
            imgUrl:fotoPostman,
            trimestre: "primeiro"
        },
        {
            title: "API GitHub",
            description: "API que desenvolvemos em sala de aula que faz a busca de um usuário do GitHub. Habilidades: H3, H4, H5, H6, H9 E H10. ",
            imgUrl: fotoGit,
            link: "https://github.com/leiticiasf/API.git",
            trimestre: "primeiro"
        },
        {
            title: "Paginação com useNavigate",
            description: "Paginando uma aplicação React.",
            imgUrl: fotoNavigate,
            link: "https://github.com/leiticiasf/paginasReact.git",
            trimestre: "primeiro"
        },
        {
            title: "Projeto Biblioteca",
            description: "Este projeto foi uma criação de um backend para uma biblioteca. Atividade super estressante porém muito útil para ampliar os conhecimentos sobre criação e manutenção de um banco de dados.",
            imgUrl: fotoBiblioteca,
            link: "https://drive.google.com/file/d/17fq3GSw-3SLF5I6m6WuvCU549GmraFTx/view?usp=drive_link",
            trimestre: "segundo"
        }


    ];      
    
    const modelagem = [
        {
            title:"Caso de Uso SA",
            description: "Esta atividade tinha como requerimento que nós criássemos um diagrama UML que explicasse o funcionamento do nosso site da SA. Foi um momento bem desesperador pensar nesse diagrama, mas conforme eu e meu grupo começamos a desenvolver, se tornou algo legal de fazer, exigiu uma parte da minha capacidade mental que eu venho buscando desenvolver a um tempo. ",  
            imgUrl: fotoCasoUML,
            link: "https://lucid.app/lucidchart/d44af6f0-98d9-4c0b-b85c-38a961aa19c7/edit?viewport_loc=-201%2C399%2C1993%2C789%2C0_0&invitationId=inv_17bc7a94-ccf2-4de0-af71-5722ce18cc03",  
            trimestre: "primeiro"

        },
        {
            title: "Sala de Aula Invertida",
            description: "Nesta atividade nós fizemos uma pesquisa e subsequentemente uma apresentação sobre a metodologia ágil Scrum. Habilidades: H3, H5 e H8",
            imgUrl: fotoScrum,
            link: "https://www.canva.com/design/DAGEpe-s3zU/ilPXCnEmUQGxjF4yp54g8Q/edit?utm_content=DAGEpe-s3zU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            trimestre: "segundo"
        },
    

    ]

    const ims = [
        {
            title: "CRM",
            description: "Nesta atividade nós criamos um cronograma como uma equipe de Implantação para então iniciar um Projeto de Implantação do sistema CRM, ainda em Desenvolvimento, para que todas as atividades necessárias para a implantação fossem coordenadas pela nossa  equipe, garantindo que a implantação por módulos seja realizada com sucesso. Apesar de ser um trabalho extenso, gostei de ver a forma como são organizados os projetos no mundo real de trabalho.",
            imgUrl: fotoCRM,
            trimestre: "primeiro"

        }

    ]

    const sa = [
        {
            title: "Wireframe de Alta Fidelidade",
            description: "Neste trabalho nós fizemos um Wireframe de alta fidelidade através do Figma para evidenciar como será a nossa SA. Habilidades: H2, H3, H4 E H5",
            imgUrl: fotoWire,
            trimestre: "segundo",
            link: "https://www.figma.com/file/Wx6TaYUznXaQeT8DZkTBpd/SA?type=design&node-id=3%3A3486&mode=design&t=fwKNayewsEe16n0Y-1&authuser=0"
        },
        {
            title: "Regra de Negócio",
            description: "Regras de Negócio que eu e meu grupo fizemos para a funcionalidade do nosso projeto da SA. Habilidades: H2, H3, H4 e H8",
            imgUrl: fotoRN,
            trimestre: "segundo",
            link: "https://docs.google.com/spreadsheets/d/1Lmv_rOQ_AbbuXhSJMDOJ1NSITgQ_3i6zTWKemffC8lc/edit?usp=sharing"    
        }
    ]

    const bancoDeDados = [
        {
            title: "Modelo Lógico",
            description: "Lista de exercícios do Modelo Lógico. Habilidades: H1 e H2.",
            imgUrl: fotoModelo,
            trimestre: "segundo",
            link: "https://docs.google.com/document/d/1QDNa8Is6XvfyGJvs4G8twBQ_Fyhruf4sWzO0LGz59Fc/edit?usp=sharing"
        },

        {
            title: "Gestão de Consultório",
            description: "Modelo lógico e conceitual construídos a partir de um enunciado de um consultório médico.  Habilidades: H1 e H2.",
            imgUrl: fotoConsultorio,
            trimestre: "segundo",
            link: "https://docs.google.com/document/d/1QDNa8Is6XvfyGJvs4G8twBQ_Fyhruf4sWzO0LGz59Fc/edit?usp=sharing"
        },
        {
            title: "Pesquisa de Normalização de Dados",
            description: "Nesta aula nós fizemos uma pesquisa como introdução ao assunto Normalização de Dados. Habilidade: H3.",
            imgUrl: fotoNormalizacao,
            trimestre: "segundo",
            link: "https://docs.google.com/document/d/1YpMS05YWqCsxd0jJHueWQMHzQR-o_jBhtlmJdXU9dvE/edit?usp=sharing"
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
                    <Nav.Link eventKey="bancoDeDados" >Banco de Dados</Nav.Link>
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
                <Tab.Pane eventKey="bancoDeDados">
                    <Row>
                        {selectedCategory === "bancoDeDados" &&
                           bancoDeDados.filter(bancoDeDados => bancoDeDados.trimestre === selectedTrimestre).map((bancoDeDados, index) => (
                                    <DevCards 
                                    key={index}
                                    {...bancoDeDados} />
                                ))}
                            
                        
                    </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="sa">
                    <Row>
                        {selectedCategory === "sa" &&
                           sa.filter(sa => sa.trimestre === selectedTrimestre).map((sa, index) => (
                                    <DevCards 
                                    key={index}
                                    {...sa} />
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
