function Education() {

    return (
      <div>
        <div className="center">
          <h1 className="titleFont">~ Education ~</h1>
        </div>
          <div className="schoolBox">
            <div class="schoolText">
            <h2 className="HF"> Central High School</h2>
            <p>In 2021, I graduated from Central High School with an A+ Scholarship and Honor Society Cords. During my time there, I was deeply involved in music, playing in the Marching and Concert bands for four years and exploring Jazz for three.
              Alongside my musical pursuits, I developed my graphic design skills over four years, working with Adobe and Illustrator. I contributed to various projects, creating designs for businesses, local politicians, and individuals, ranging from t-shirts and hoodies to car decals and political yard signs.
              As a senior, I took on leadership roles within my section and was regularly entrusted with important projects by my graphic design teacher</p>
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
              <p>While I am currently enrolled at Neumont University until August 2024, my involvement extends beyond academics. I proudly serve as an Academic Coach, specializing in web-based and English classes, supporting my peers in their educational journey. Additionally, I hold the role of Secretary in the Pokémon Club, where I contribute to fostering a vibrant community centered around shared interests and camaraderie.</p>
            </div>
          </div>
      </div>
  
    );
  }
  
  export default Education;