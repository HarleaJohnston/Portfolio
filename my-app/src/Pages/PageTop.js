

function PageTop() {
  const email = 'johnstonharlea@gmail.com';

  const openPDF = () => {
    // Replace 'your-pdf-file.pdf' with the actual filename of your PDF
    const pdfUrl = './path/to/Resume.pdf';

    // Open the PDF in a new tab/window
    window.open(pdfUrl, '_blank');
  };

  return (
    <div>
      <div className="webTop">
        <img className="imgSize" src={process.env.PUBLIC_URL + "/MyPic.png"}/>
        <div className="introBox">
          <div className="introText">
            <ul>
              <div>
                <h3 className="HF2">
                  <a className="link" href= {`mailto:${email}`} target="_blank" rel="noopener noreferrer">Email Me</a>
                </h3>
              </div>
              <h1 className="HF">Harlea Johnston</h1>
              <h2 className="HF">(Any Pronouns)</h2>
              <h2 className="HF2">Web Developer</h2>
              <div className="line"></div>
              <h3 className="about">About Me:</h3>
              <div className="aboutMeBox">
                <p className="fontSize">Hello! I'm Harlea, a senior at Neumont College of Computer Science persuing my Bacholers in Web Development and Design. I'm dedicated to crafting seamless and responsive online experiences. My expertise lies in React, Javascript, HTML, and CSS, but I'm always eager to take on new challenges in the ever-evolving digital landscape. Let's collaborate and bring your digital vision to life.</p>
              </div>
              <span>
                <button className="space" onClick={openPDF}>Resume</button>
                <a className="link" href={'https://www.linkedin.com/in/harlea-johnston-927722223'}>
                  <i class="bi bi-linkedin m-2"></i>
                </a>
                <a className="link" href={'https://github.com/HarleaJohnston'}>
                  <i class="bi bi-github m-2"></i>
                </a>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default PageTop;
