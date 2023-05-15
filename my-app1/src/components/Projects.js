import "./Projects.css";
import { Link } from 'react-router-dom';
import board from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/board1.jpeg";
import nextgym from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/next-gym.png";
import weatherReport from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/weather-app 2.jpeg";
import todo from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/list-todo.avif";
import wordgame from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/word-game.png";
import chat from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/chat-img.png";
import styled from "styled-components";
import about from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/about.svg";
import experience from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/experience.png";
import home from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/home.svg";

const NavUnlisted = styled.ul`
  text-decoration: none;
  gap: 25px;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;  
  font-size: 16px;
  font-family: Georgia, serif;
`

const Projects = () => {
    return (
        <div className="main-projects">
            <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            <div className="navbar-container2">
                <div className="nav-menu2">
                    <NavUnlisted>
                        <div className="nav-i">
                            <img className="img" alt="user" src={home}/>
                            <StyledLink className="link" to="/">HOME</StyledLink>
                        </div>
                        <div className="nav-i">
                            <img className="img" src={about}/>
                            <StyledLink className="link" to="/about">ABOUT</StyledLink>
                        </div>
                        <div className="nav-i">
                            <img className="img" src={experience}/>
                            <StyledLink className="link" to="/experience">EXPERIENCE</StyledLink>
                        </div>
                    </NavUnlisted>
                </div>
            </div>
            <div className="projects-wrapper">
                <div className="pr">
                    <img src={nextgym}/>
                    <h2>My next gym</h2>
                    <p>Tech stack: Python, Flask, PostgreSQL, React, HTML, CSS, JavaScript, Git, Postman, Google Maps API</p>
                    <a className="capstone" href="https://www.youtube.com/watch?v=VFmsh5oNHYA" target="_blank">Demo</a>
                </div>
                <div className="pr">
                    <img src={board}/>
                    <h2>Inspiration Board</h2>
                    <p>Tech stack: Python, Flask, PostgreSQL, React, HTML, CSS, JavaScript, Git, Postman</p>
                    <form action="https://github.com/fdang836/back-end-inspiration-board">
                        <button className="demo" type="submit">Github</button>
                    </form>
                </div>
                <div className="pr">
                    <img src={weatherReport}/>
                    <h2>Weather Report</h2>
                    <p>Tech stack: React, HTML, CSS, JavaScript, Git, OpenWeather API, Postman</p>
                    <form action="https://github.com/doinyco/weather-report">
                        <button className="demo" type="submit">Github</button>
                    </form>
                </div>
                <div className="pr">
                    <img src={chat}/>
                    <h2>Chatlog</h2>
                    <p>Tech stack: React, HTML, CSS, JavaScript, Git</p>
                    <form action="https://github.com/doinyco/react-chatlog">
                        <button className="demo" type="submit">Github</button>
                    </form>
                </div>
                <div className="pr">
                    <img src={todo}/>
                    <h2>Task List API</h2>
                    <p>Tech stack: Python, Flask, PostgresSQL, Postman, React, HTML, CSS, JavaScript, Git</p>
                    <form action="https://github.com/doinyco/task-list-api">
                        <button className="demo" type="submit">Github</button>
                    </form>
                </div>
                <div className="pr">
                    <img src={wordgame}/>
                    <h2>JS Adagrams</h2>
                    <p>Tech stack: React, HTML, CSS, JavaScript, Git, Node.js</p>
                    <form action="https://github.com/doinyco/js-adagrams">
                        <button className="demo" type="submit">Github</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Projects;




