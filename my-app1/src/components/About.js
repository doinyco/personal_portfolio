import "./About.css";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import mail from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/gmail (1).png";
import me from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/DC.jpg";
import projects from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/projects.svg";
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

const Education = () => {
    return(
        <div className="main-about">
            <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            <div className="navbar-container2"> 
                <div className="nav-menu2">
                    <NavUnlisted>
                        <div className="nav-i"><img alt="user" src={home}/><StyledLink className="link" to="/">HOME</StyledLink></div>
                        <div className="nav-i"><img src={projects}/><StyledLink className="link" to="/projects">PROJECTS</StyledLink></div>
                        <div className="nav-i"><img src={experience}/><StyledLink className="link" to="/experience">EXPERIENCE</StyledLink></div>
                
                    </NavUnlisted>
                </div>
            </div>
            <div className="about-me">
                <img src={me}/>
                <div className="personal-info">
                    <h1>ABOUT</h1>
                    <div className="line"></div>
                    <br/>
                        <div className="description">
                        <p>
                            I am a passionate Software Engineer thrilled to embark on my career in the industry after recently graduating from Ada Developers Academy with a certificate in Full Stack Web Development and Computer Science Fundamentals.
                        </p>
                        <p>.</p>
                        <p>
                            I have a particular interest in Web Development and have experience building Full Stack web applications, backend data processing systems, and well-versed in agile software development methodologies. 
                        </p>
                        <p>.</p>
                        <p>
                            As an Ada student, and Amazon intern, I gained valuable real-world experience, which has allowed me to develop a keen understanding of how to approach and solve challenging problems.
                        </p>
                        <div className="email"><img src={mail}></img><p>Contact: doinyco@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export default Education;