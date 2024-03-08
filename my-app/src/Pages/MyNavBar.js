import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <div>
        <div class="container">
            <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="#Projects" class="nav-link">Projects</a></li>
                <li class="nav-item"><a href="#AboutMe" class="nav-link">About Me</a></li>
            </ul>
            </header>
        </div>
    </div>
  );
};

export default MyNavbar;