
function Contact() {
  const email = 'johnstonharlea@gmail.com';
    return (
      <div className="column" >
          <div className="center">
              <h2 className="titleFont">Contact</h2>
          </div>
        <div className="center">
          <div className="contactCenter">
            <div className="contactBox">
              <div>
                <h3 className="HF">Get In Touch!</h3>
                <p>You can find me on...</p>
                <ul>
                  <ol>
                    <a href={'https://www.linkedin.com/in/harlea-johnston-927722223'}>LinkedIn</a>
                  </ol>
                  <ol>
                    <a href={'https://github.com/HarleaJohnston'}>GitHub</a>
                  </ol>
                  <ol>
                    <a href={`mailto:${email}`}>Email</a>
                  </ol>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    );
  }
  
  export default Contact;
  