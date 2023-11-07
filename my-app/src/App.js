import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="webTop">
        <img className="imgSize" src={process.env.PUBLIC_URL + "/MyPic.png"}/>
        <div className="introBox">
          <h1 className="HF">Harlea Johnston</h1>
          <h2 className="HF">(Any Pronouns)</h2>
          <h3 className="HF2">Web Developer</h3>

        </div>
      </div>
    </div>
  );
}

export default App;
