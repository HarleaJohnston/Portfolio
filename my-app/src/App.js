import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import PageTop from './Pages/PageTop.js';
import Skills from './Pages/Skills';
import Skills2 from './Pages/Skills2.js';
import Collage from './Pages/Collage';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';
import AboutMe from './Pages/AboutMe';
import MyNavbar from './Pages/MyNavBar';

function App() {
  const [currentPage, setCurrentPage] = useState('Projects'); 

  return (
    <div className="App">
      <header>Harlea's Portfolio</header>


      <section id="Home">
        <PageTop />
      </section>


      <MyNavbar setCurrentPage={setCurrentPage} />


      <section>
        {currentPage === 'Projects' && <Projects />}
        {currentPage === 'AboutMe' && <AboutMe />}
      </section>


      <Collage />
      <Footer />
    </div>
  );
}

export default App;
