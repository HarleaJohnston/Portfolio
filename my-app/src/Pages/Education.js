function Education() {

    return (
      <div>
        <div className="center">
          <h1 className="titleFont">~ Education ~</h1>
        </div>
          <div className="schoolBox">
            <div class="schoolText">
            <h2 className="HF"> Central High School</h2>
            <p>Graduated from Central High School in 2021 with an A+ Scholarship and Honor Society Cords. Was in Marching and Concert band for 4 years, as well as Jazz for 3 years. Worked in Adobe and Illiustrator for 4 years and helping make designs for businesses, local politions, and everyday people. Whether it be t-shirts, hoodies, car decals, to political yard signs. Helped lead my section as a Senior and was called upon regularly by my graphic design teacher to take on bigger projects and to meet big dead lines with the products we were making. </p>
            </div>

            <div>
            <img className="imgs" src={process.env.PUBLIC_URL + "./imgs/SchoolImg.png"}/>
            </div>
          </div>

          <div className="schoolBox">
            <div>
            <img className="imgs" src={process.env.PUBLIC_URL + "./imgs/SchoolImg2.png"}/>
            </div>

            <div class="schoolText">
              <h2 className="HF">Neumont College of Computer Science</h2>
              <p>While I am still attending Neumont untill Auguest of 2024. I am an Academic Coach for the school focusing on Web Based classes as well as English classes. I am the Secretary of the Pokémon Club.</p>
            </div>
          </div>
      </div>
  
    );
  }
  
  export default Education;