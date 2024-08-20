import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const data = [
    {
      id: 1,
      image: './imgs/CutTheBS.png',
      title: 'Cut the BS',
      description: `Site that gives users access to a recipe API. Cut the BS's goal is to provide users with recipes without the stories that go with most online recipes.`,
      link: 'https://github.com/NovaGamer368/Cut-the-BS.git',
      proType: 'Group',
      images: [
        './imgs/CutTheBSImgs/HomePage1.png',
        './imgs/CutTheBSImgs/HomePage2.png',
        './imgs/CutTheBSImgs/HomePage3.png',
        './imgs/CutTheBSImgs/HomePage4.png',
        './imgs/CutTheBSImgs/APIRecipes.png',
        './imgs/CutTheBSImgs/RecipeSearch.png'
      ],
      summary: {
        purpose: "The Cut the BS Recipe Web App is designed for users who want quick, straightforward access to recipes without the unnecessary clutter commonly found on other sites. This web app eliminates long-winded personal stories, focusing solely on delivering recipes in the most efficient way possible.",
        technologyStack: {
          frontend: "HTML and CSS for a clean and responsive user interface.",
          backend: "C# with ASP.NET for robust server-side logic and handling user interactions.",
          database: "SQL Server to manage and store all recipe data securely."
        },
        coreFeatures: [
          "Streamlined Recipe Presentation: Recipes are presented without any superfluous content. Each recipe page includes just the essentials: title, ingredients, instructions, and an image. No ads, no stories—just the recipe information users are looking for.",
          "Efficient Search and Navigation: Users can quickly find recipes by searching for specific ingredients, cuisines, or dietary needs. Search results are focused solely on recipes, providing the most relevant options without distractions.",
          "SQL Database Integration: Recipes, ingredients, and user data are stored in a SQL Server database. The database is designed for quick access, ensuring fast loading times and efficient query processing.",
          "Responsive and User-Friendly Design: The app’s design is responsive, ensuring that users have an optimal experience whether they’re using a desktop, tablet, or smartphone. The interface is clean and intuitive, making it easy for users of all tech levels to navigate and find what they need.",
          "Admin Management: Admins can manage the recipe database directly through an integrated admin panel, where they can add, edit, or remove recipes. The admin panel is designed for efficiency, allowing for quick updates and maintenance."
        ],
        targetAudience: "This web app is perfect for users who value their time and prefer a no-nonsense approach to finding recipes. It’s designed for those who want to get straight to cooking without sifting through unrelated content."
      }
    },
    {
      id: 2,
      image: './imgs/UnhelpfulAI.png',
      title: 'Unhelpful AI',
      description: 'The Base of a Virtual Assistant. It can search Wikipedia, tell jokes, and navigate to websites like Spotify.',
      link: 'https://github.com/HarleaJohnston/UnhelpfulAI.git',
      proType: 'Group',
      images: ['./imgs/UnhelpfulAI.png'],
      summary: {
        purpose: "Unhelpful AI is a virtual assistant prototype designed to be as unhelpful as possible. It performs basic tasks such as searching Wikipedia, telling jokes, and navigating to specific websites, but only if users ask nicely with 'please' and 'thank you'.",
        technologyStack: {
          frontend: "None",
          backend: "Python with voice recognition for handling user interactions and integrating with various APIs.",
          database: "None"
        },
        coreFeatures: [
          "Wikipedia Search: Allows users to search for information on Wikipedia, provided they ask politely.",
          "Joke Telling: Provides users with a collection of jokes, but only if requested with 'please'.",
          "Website Navigation: Enables users to navigate to websites like Spotify, if asked nicely."
        ],
        targetAudience: "This project is aimed at users interested in virtual assistant technology with a humorous twist on politeness and basic AI functionalities."
      }
    },
    {
      id: 3,
      image: './imgs/WO.png',
      title: 'Whendigo Occurrences',
      description: 'Whendigo Occurrences is a Blog ARG. This blog allows users to explore the site looking for clues as to what is happening in Whendigo, Missouri.',
      link: 'https://github.com/HarleaJohnston/Capstone_WhendigoOccurances',
      proType: 'Solo',
      images: ['./imgs/CutTheBS.png'],
      summary: {
        purpose: "Whendigo Occurrences is an alternate reality game blog designed to engage users in a narrative exploring mysterious events in Whendigo, Missouri.",
        technologyStack: {
          frontend: "ReactJS, JavaScript, HTML, and Bootstrap for creating and styling the blog interface.",
          backend: "Express and Node.js for managing blog content and user interactions.",
          database: "MongoDB for storing and retrieving blog data."
        },
        coreFeatures: [
          "Interactive Blog: Users can explore blog content and find clues related to the ARG narrative.",
          "Narrative Elements: The blog includes various story elements and puzzles for users to solve."
        ],
        targetAudience: "This project is intended for users who enjoy interactive storytelling and alternate reality games."
      }
    },
    {
      id: 4,
      image: './imgs/Annex.png',
      title: 'Annex',
      description: `Is the Prototype of a library for Multi-Media Collectors. This library app's goal is to help keep your collections in order and prevent spending money on things you already own.`,
      link: 'https://github.com/NovaGamer368/Add-The-BS',
      proType: 'Group',
      images: ['./imgs/CutTheBS.png'],
      summary: {
        purpose: "Annex is a library app prototype designed for multi-media collectors to manage their collections and prevent unnecessary purchases.",
        technologyStack: {
          frontend: "None (UI/UX research and practice only).",
          backend: "None (UI/UX research and practice only).",
          database: "None (UI/UX research and practice only)."
        },
        coreFeatures: [
          "Collection Management: Allows users to catalog their media collections and track what they own.",
          "Duplicate Avoidance: Helps users avoid buying duplicate items."
        ],
        targetAudience: "This app is for multi-media collectors looking to organize their collections effectively."
      }
    },
    {
      id: 5,
      image: './imgs/AddTheBS.png',
      title: 'Add The BS',
      description: `Movie website with all the fixins`,
      link: 'https://github.com/NovaGamer368/Add-The-BS',
      proType: 'Group',
      images: ['./imgs/CutTheBS.png'],
      summary: {
        purpose: "Add The BS is a movie website designed to provide a complete movie-related experience, featuring various functionalities and content.",
        technologyStack: {
          frontend: "Built using React for a dynamic and interactive user interface.",
          backend: "Javascript to build out the connect to our Database as well as handled the routes for our Frontend to communicate with. Node.js with Express for server-side logic. ",
          database: "Initially used MongoDB, but later switched to Microsoft SQL Server Management for server-side logic and data management."
        },
        coreFeatures: [
          "Comprehensive Movie Content: Offers a range of features and content related to movies.",
          "User-Friendly Interface: Provides an intuitive interface for exploring movie-related information."
        ],
        targetAudience: "Movie enthusiasts looking for a complete and interactive movie website."
      }
    },
    {
      id: 6,
      image: './imgs/Annex.png',
      title: 'Annex: App',
      description: `Is a library for Multi-Media Collectors. This library app's goal is to help keep your collections in order and prevent spending money on things you already own.`,
      link: 'https://github.com/HarleaJohnston/Annex',
      proType: 'Group',
      images: ['./imgs/CutTheBS.png'],
      summary: {
        purpose: "Annex: App is a library app aimed at helping multi-media collectors manage their collections and prevent duplicate purchases. It includes both a web application and a mobile app.",
        technologyStack: {
          frontend: "React for the web app and Flutter with Dart for the mobile app.",
          backend: "Node.js with Express for server-side logic.",
          database: "MongoDB for managing data across both web and mobile platforms."
        },
        coreFeatures: [
          "Collection Organization: Provides tools for cataloging and organizing multi-media collections on both web and mobile platforms.",
          "Duplicate Prevention: Features to help users avoid buying duplicate items across both web and mobile apps."
        ],
        targetAudience: "Multi-media collectors looking for a unified solution to manage their collections across both web and mobile platforms."
      }
    }
  ];
  

  const [selectedProject, setSelectedProject] = useState(null);

  const handleTitleClick = (id) => {
    setSelectedProject(data.find((project) => project.id === id));
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };
  
  if (selectedProject) {
    return (
      <div className="container">
        <button onClick={handleBackClick}>Back to Projects</button>
        <div className="card" style={{ width: "100%", margin: "30px 0" }}>
          <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {selectedProject.images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img src={image} className="d-block w-100" alt={selectedProject.title} />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title">{selectedProject.title}</h5>
            <label>Project Type:</label>
            <p className="card-text">{selectedProject.proType}</p>
            <p className="card-text">{selectedProject.about}</p>
            <h6>Summary:</h6>
            <p className="card-text"><strong>Purpose:</strong> {selectedProject.summary.purpose}</p>
            <p className="card-text"><strong>Technology Stack:</strong></p>
            <ul>
              <li><strong>Frontend:</strong> {selectedProject.summary.technologyStack.frontend}</li>
              <li><strong>Backend:</strong> {selectedProject.summary.technologyStack.backend}</li>
              {selectedProject.summary.technologyStack.database && (
                <li><strong>Database:</strong> {selectedProject.summary.technologyStack.database}</li>
              )}
            </ul>
            <p className="card-text"><strong>Core Features:</strong></p>
            <ul>
              {selectedProject.summary.coreFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="card-text"><strong>Target Audience:</strong> {selectedProject.summary.targetAudience}</p>
            Github:
            <a className="link" href={selectedProject.link}>
              <i className="bi bi-github m-2"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }

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
            <img src={card.image} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">
                <a href="#Projects" onClick={() => handleTitleClick(card.id)}>{card.title}</a>
              </h5>
              <label>Project Type:</label>
              <p className="card-text">{card.proType}</p>
              <p className="card-text">{card.description}</p>
              Github:
              <a className="link" href={card.link}>
                <i className="bi bi-github m-2"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
