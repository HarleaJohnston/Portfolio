import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import PageTop from './Pages/PageTop.js';
import Skills from './Pages/Skills';
import Skills2 from './Pages/Skills2.js';
import Collage from './Pages/Collage';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer'
import AboutMe from './Pages/AboutMe'
import MyNavbar from './Pages/MyNavBar';

function App() {
  const isMobile = window.innerWidth <= 768;
  

  return (
    <div className="App">
      <head>
        <header>Harlea's Portfolio </header>
      </head>
      <PageTop/>

      <MyNavbar/>

      <Collage/>

      <section id='AboutMe'>
        <AboutMe/>
      </section>

      <section id='Projects'>
        <Projects/>
      </section>

      <Footer/>
      

    </div>
  );
}

export default App;
