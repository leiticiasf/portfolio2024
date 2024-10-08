import logo from './assets/photos/cachorro.png';
import './App.css';
import {NavBar} from './componentes/NavBar';
import {Banner} from './componentes/Banner';
import {Skills} from './componentes/Skills';
import {Projects} from './componentes/Projects';
import {DevProjects} from './componentes/ProjectsTech';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Ppe} from "./componentes/Ppe";
import {Final} from "./componentes/Final";
import {Curriculo} from "./componentes/Curriculo";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <DevProjects/>
    <Curriculo/>
    <Ppe/>
    <Final/>
    </div>
  );
}

export default App;
