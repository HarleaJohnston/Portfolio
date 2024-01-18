import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

function Projects() {

  const data = [
    { id: 1, image: './imgs/CutTheBS.png', title: 'Cut the BS', description: `Site that gives users access to an recipe API. Cut the BS's goal to to provide users with recipes with out the stories that go with most online recipes.`, link: 'https://github.com/NovaGamer368/Cut-the-BS.git', proType: 'Group' },
    { id: 2, image: './imgs/UnhelpfulAI.png', title: 'Unhelpful AI', description: 'The Base of an Virtual Assistant. It can search Wikipedia, Tell Jokes, and Navigate to websites like Spotify.', link: 'https://github.com/HarleaJohnston/UnhelpfulAI.git', proType: 'Group' },
    { id: 3, image: './imgs/WO.png', title: 'Whendigo Occurrences', description: 'Whendigo Occurrences is an Blog ARG. This blog allows users to explore the site looking for clues as to what is happening in Whendigo, Missouri.', link: 'https://github.com/HarleaJohnston/Capstone_WhendigoOccurances', proType: 'Single' },
    { id: 4, image: './imgs/3.png', title: 'Annex', description: `Is the Prototype of a library for Mult-Media Collectors. This library app's goal is to help keep your collections in order and prevent spending money on things you already own`, link: 'https://github.com/HarleaJohnston/Capstone_WhendigoOccurances', proType: 'Single' },
  ];

  return (
    <div>
      <div className="center">
        <h2 className="titleFont">~ Projects ~</h2>
      </div>

      <Carousel className="infoCarousel">
        {data.map((item) => (
          <Carousel.Item key={item.id}>
            <Card className="card">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Project Type: {item.proType}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Card.Link href={item.link}>{item.link}</Card.Link>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="spacer"></div>
    </div>
  );
}

  
  export default Projects;
  