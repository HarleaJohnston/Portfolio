import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import PageTop from './Pages/PageTop.js';
import Nav from './Pages/Nav.js';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Collage from './Pages/Collage';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer'

function App() {

  return (
    <div className="App">
      <PageTop/>

      <Nav/>

      <Education/>

      <Skills/>

      <Collage/>

      <Projects/>

      <Contact/>

      <Footer/>
      

    </div>
  );
}

export default App;
