import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import PageTop from './Pages/PageTop.js';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Collage from './Pages/Collage';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer'
import AboutMe from './Pages/AboutMe'

function App() {

  return (
    <div className="App">
      <head>
        <header>Harlea's Portfolio </header>
      </head>
      <PageTop/>

      <br/>

      <Collage/>

      <AboutMe/>

      <Skills/>

      <Projects/>

      <Education/>

      <Footer/>
      

    </div>
  );
}

export default App;
