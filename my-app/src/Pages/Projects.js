import React from 'react';

const Projects = () => {
  const data = [
    { id: 1, image: './imgs/CutTheBS.png', title: 'Cut the BS', description: `Site that gives users access to an recipe API. Cut the BS's goal to to provide users with recipes with out the stories that go with most online recipes.`, link: 'https://github.com/NovaGamer368/Cut-the-BS.git', proType: 'Group' },
    { id: 2, image: './imgs/UnhelpfulAI.png', title: 'Unhelpful AI', description: 'The Base of an Virtual Assistant. It can search Wikipedia, Tell Jokes, and Navigate to websites like Spotify.', link: 'https://github.com/HarleaJohnston/UnhelpfulAI.git', proType: 'Group' },
    { id: 3, image: './imgs/WO.png', title: 'Whendigo Occurrences', description: 'Whendigo Occurrences is an Blog ARG. This blog allows users to explore the site looking for clues as to what is happening in Whendigo, Missouri.', link: 'https://github.com/HarleaJohnston/Capstone_WhendigoOccurances', proType: 'Solo' },
    { id: 4, image: './imgs/Annex.png', title: 'Annex', description: `Is the Prototype of a library for Mult-Media Collectors. This library app's goal is to help keep your collections in order and prevent spending money on things you already own`, link: 'https://github.com/NovaGamer368/Add-The-BS', proType: 'Group' },
    { id: 5, image: './imgs/AddTheBS.png', title: 'Add The BS', description: `Movie website with all the fixins `, link: 'https://github.com/NovaGamer368/Add-The-BS', proType: 'Group' },
    { id: 6, image: './imgs/Annex.png', title: 'Annex: App', description: `Is a library for Mult-Media Collectors. This library app's goal is to help keep your collections in order and prevent spending money on things you already own`, link: 'https://github.com/HarleaJohnston/Annex', proType: 'Group' },
  ];

  
    return (
      <div className="container">
      <div
        className="card-carousel"
        id="cardCarousel"
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {data.map((card) => (
          <div key={card.id} className="card" style={{ flex: "0 0 auto", width: "300px", marginRight: "20px", scrollSnapAlign: "start" }}>
            <img src={card.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <label>Project Type:</label>
              <p className="card-text">{card.proType}</p>
              <p className="card-text">{card.description}</p>
              Github:
              <a className="link" href={card.link}>
                  <i class="bi bi-github m-2"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

 export default Projects;
  