import './App.css';

function App() {
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
                <a href={"https://www.google.com/"} target="_blank" rel="noopener noreferrer">Email Me</a>
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
    </div>
  );
}

export default App;
