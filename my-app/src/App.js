import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const email = 'johnstonharlea@gmail.com';
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="webTop">
        <img className="imgSize" src={process.env.PUBLIC_URL + "/MyPic.png"}/>
        <div className="introBox">
          <div className="introText">
            <ul>
              <h3 className="HF2">
                <a className="link" href= {`mailto:${email}`} target="_blank" rel="noopener noreferrer">Email Me</a>
              </h3>
              <h1 className="HF">Harlea Johnston</h1>
              <h2 className="HF">(Any Pronouns)</h2>
              <h2 className="HF2">Web Developer</h2>
              <div className="line"></div>
              <h3 className="about">About Me:</h3>
              <div className="aboutMeBox">
                <p className="fontSize">Hello! I'm Harlea, a senior at Neumont College of Computer Science persuing my Bacholers in Web Development and Design. I'm dedicated to crafting seamless and responsive online experiences. My expertise lies in React, Javascript, HTML, and CSS, but I'm always eager to take on new challenges in the ever-evolving digital landscape. Let's collaborate and bring your digital vision to life.</p>
              </div>
                <button>Resume</button>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">

        <div className="navColor">
          <header  class="d-flex justify-content-center py-3" >
            <ul class="nav nav-pills">
              <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Education</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Projects</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
              <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            </ul>
          </header>
        </div>

      <div>
        <div className="center">
          <h1 className="titleFont">Education</h1>
        </div>
          <div className="schoolBox">
            <div class="schoolText">
            <h2 className="HF"> Central High School</h2>
            <p>Graduated from Central High School in 2021 with an A+ Scholarship and Honor Society Cords. Was in Marching and Concert band for 4 years, as well as Jazz for 3 years. Worked in Adobe and Illiustrator for 4 years and helping make designs for businesses, local politions, and everyday people. Whether it be t-shirts, hoodies, car decals, to political yard signs. Helped lead my section as a Senior and was called upon regularly by my graphic design teacher to take on bigger projects and to meet big dead lines with the products we were making. </p>
            </div>

            <div>
            <img className="imgs" src={process.env.PUBLIC_URL + "/SchoolImg.png"}/>
            </div>
          </div>

          <div className="schoolBox">
            <div>
            <img className="imgs" src={process.env.PUBLIC_URL + "/SchoolImg2.png"}/>
            </div>

            <div class="schoolText">
              <h2 className="HF">Neumont College of Computer Science</h2>
              <p>While I am still attending Neumont untill Auguest of 2024. I am an Academic Coach for the school focusing on Web Based classes as well as English classes. I am the Secretary of the Pokémon Club.</p>
            </div>
          </div>
      </div>
        
      </div>
    <div className="collage">
      <div className="spacer2"></div>
    </div>

    <div>
      <p>Projects</p>
    </div>

    </div>
  );
}

export default App;
