import './App.css';
import linkedIn from "./images/linkedin-48.svg"
import github from "./images/github.svg"
import { Link } from 'react-router-dom';
import styled from "styled-components";
import doina from "./images/dc.png"
import certificate from "./images/certificate (1).png";
import about from "./images/about.svg";
import projects from "./images/projects.svg";
import experience from "./images/experience.png";

const NavUnlisted = styled.ul`
  text-decoration: none;
  gap: 8%;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;  
  font-size: 16px;
  font-family: Georgia, serif;
`

function App() {
  return (
    <html>
      <header className="Doina's App">
      <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
      </header>
      <body>
        <div className="main-app">
          <div className="intro">
            <h2>DCoy</h2>
          </div>
          <div className="navbar-container1">
            <div className="nav-menu1">
              <NavUnlisted>
                <div className="nav-i">
                  <img alt="user" src={about}/>
                  <StyledLink className="link" to="/about">ABOUT</StyledLink>
                </div>
                <div className="nav-i">
                  <img src={projects}/>
                  <StyledLink className="link" to="/projects">PROJECTS</StyledLink>
                </div>
                <div className="nav-i">
                  <img src={experience}/>
                  <StyledLink className="link" to="/experience">EXPERIENCE</StyledLink>
                </div>
              </NavUnlisted>
            </div>
          </div>
        </div>
        <div className="personal">
          <div className="me">
            <h1>Hello, <br/>I'm Doina.</h1>
            <p>A Fullstack Software Engineer with a passion for building dynamic and responsive web applications ✨</p>
          </div>
          <img src={doina}/>
        </div>
        <div className="social">
            <form action="https://www.docdroid.net/SDu1v2E/doina-colun-resume-1-pdf">
              <button className="button" type="submit">Resume</button>
            </form>
            <a className="certificate" href="https://www.docdroid.net/wuM35Bc/doinas-certificate-pdf"><img src={certificate}/></a>
            <a href="https://www.linkedin.com/in/doina-colun-97230a216/"><img src={linkedIn}/></a>
            <a href="https://github.com/doinyco"><img src={github}/></a>
        </div>
        <footer id="footer">Doina Colun © 2023</footer>
      </body>
    </html>
  );
}

export default App;
