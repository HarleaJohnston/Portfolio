import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

function AboutMe() {

  const data = [
    { id: 1, image: "./imgs/GrowingUp.png", title: 'Growing Up:', description: 'I grew up in a small town in the middle of nowhere Missouri. Where I fostered my interests in art and music. During my middle school years, a chance encounter led me to join an all-girls programming club, opening the door to the captivating world of coding. With each line of code, I found a new avenue for expression and exploration, igniting a spark that would shape my future. Throughout high school, my interests continued to evolve, drawing me deeper into the realms of graphic design and programming. Yet, it was during my senior year that my true calling revealed itself. As I delved into website development, I found myself utterly captivated, realizing that this was not merely a skill to master but a passion to pursue with unwavering determination.' },
    { id: 2, image: "./imgs/SchoolImg.png", title: 'Central High School', description: 'In 2021, I graduated from Central High School with an A+ Scholarship and Honor Society Cords. During my time there, I was deeply involved in music, playing in the Marching and Concert bands for four years and exploring Jazz for three. Alongside my musical pursuits, I developed my graphic design skills over four years, working with Adobe and Illustrator. I contributed to various projects, creating designs for businesses, local politicians, and individuals, ranging from t-shirts and hoodies to car decals and political yard signs. As a senior, I took on leadership roles within my section and was regularly entrusted with important projects by my graphic design teacher'},
    { id: 3, image: "./imgs/SchoolImg2.png", title: 'Neumont College of Computer Science', description: 'While I am currently enrolled at Neumont University until August 2024, my involvement extends beyond academics. I proudly serve as an Academic Coach, specializing in web-based and English classes, supporting my peers in their educational journey. Additionally, I hold the role of Secretary in the Pokémon Club, where I contribute to fostering a vibrant community centered around shared interests and camaraderie.' },
   
  ];
    return (
      <div>
        <div className="center">
          <h1 className="titleFont">~ About Me ~</h1>
        </div>
        <div className='center'>
          <Carousel className="infoCarousel">
            {data.map((item) => (
              <Carousel.Item key={item.id}>
                <div className="card2">
                  <div>
                    <img className='imgSize2' src={item.image} alt="..." />
                  </div>
                  <div className='infoSize'>
                  <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                  </div>


                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="spacer"></div>
        </div>
  </div>
  
    );
  }
  
  export default AboutMe;
  