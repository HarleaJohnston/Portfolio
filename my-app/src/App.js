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
                <p>ncdksmpnfkndskfnmkdsmkf dsmfmdls, nkdsfs dsmal;fm fmdsl;s</p>
              </div>
                <button>Resume</button>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">

    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>

    <div>
      <p>Education</p>
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
