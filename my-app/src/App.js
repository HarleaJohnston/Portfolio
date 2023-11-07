import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="webTop">
        <img className="imgSize" src={process.env.PUBLIC_URL + "/MyPic.png"}/>
        <div className="introBox">
          <h1>Harlea Johnston</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
