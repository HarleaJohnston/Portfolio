

function Projects() {

  const data = [
    { id: 1, image: '/CutTheBS.png', title: 'Cut the BS', description: `Site that gives users access to an recipe API. Cut the BS's goal to to provide users with recipes with out the stories that go with most online recipes.`, link: 'https://github.com/NovaGamer368/Cut-the-BS.git', proType: 'Group' },
    { id: 2, image: '/UnhelpfulAI.png', title: 'Unhelpful AI', description: 'The Base of an Virtual Assistant. It can search Wikipedia, Tell Jokes, and Navigate to websites like Spotify.', link: 'https://github.com/HarleaJohnston/UnhelpfulAI.git', proType: 'Group' },
    { id: 3, image: '/WO.png', title: 'Whendigo Occurrences', description: 'Whendigo Occurrences is an Blog ARG. This blog allows users to explore the site looking for clues as to what is happening in Whendigo, Missouri.', link: 'Work In Progress', proType: 'Single' },
  ];

    return (
      <div>
        <div className="center">
            <h2 className="titleFont">~ Projects ~</h2>
        </div>

        <div className="infoCarousel">
          <div className="cardCarousel">
            {data.map((item) => (
              <div key={item.id} className="card">
                <img src={process.env.PUBLIC_URL + item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p>Project Type: {item.proType}</p>
                  <p className="card-text">{item.description}</p>
                  <a href={item.link}>{item.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="spacer"></div>

      </div>
  
    );
  }
  
  export default Projects;
  