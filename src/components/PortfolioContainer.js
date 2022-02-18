import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/AboutMe';
import About from './pages/Portfolio';
import Blog from './pages/Resume';
import Contact from './pages/Contact';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "./pages/style.css"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     <Jumbotron fluid class="jumbotron">
      <Container>
        <h1 class='textColor'>Maximilian Wittner</h1>
        <p class='textColor'>
           junior full stack developer  
        </p>
      </Container>
       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </Jumbotron>
      {renderPage()}
      <footer className="w-100 mt-auto bg-secondary p-4" class="footerBar">
      <div className="container text-center mb-5">
          <button
            className="btn btn-dark mb-4 mx-5 mt-4"
            onClick={()=> window.open("https://github.com/", "_blank")}
          >
            GitHub
          </button>
          <button
            className="btn btn-dark mb-4 mx-5 mt-4"
            onClick={()=> window.open("https://www.instagram.com/lil.slash/", "_blank")}
          >
            Instagram
          </button>
          <button
            className="btn btn-dark mb-4 mx-5 mt-4"
            onClick={()=> window.open("https://www.linkedin.com/in/maximilian-witnner-255007225", "_blank")}
          >
            Linkedin
          </button>
      </div>
    </footer>
    </div>
    
  );
}
