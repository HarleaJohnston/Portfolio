import React from 'react';

const MyNavbar = ({ setCurrentPage }) => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button className="nav-link" onClick={() => setCurrentPage('Projects')}>Projects</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => setCurrentPage('AboutMe')}>About Me</button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default MyNavbar;
