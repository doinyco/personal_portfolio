import "./Experience.css";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import ada from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/ada-icon 2.jpeg";
import LWtech from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/LWtech.png";
import USM from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/USM.png";
import flask from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/flask.svg";
import css3 from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/css3.svg";
import java from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/icons8-java.svg";
import amazon from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/amazon-icon.jpeg";
import python from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/python.svg";
import scala from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/scala.svg";
import html from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/html.svg";
import react from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/react.svg";
import aws from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/aws.svg";
import git from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/git.svg";
import postgresql from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/postgresql.svg";
import intellij from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/intellij.svg";
import vscode from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/vs-code.svg";
import postman from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/postman.svg";
import spark from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/spark.svg";
import about from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/about.svg";
import projects from "/Users/doinacolun/Desktop/personal_portfolio/my-app1/src/images/projects.svg";
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

const Experience = () => {
    return(
        <html>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <body>
                <div className="main-exp">
                    <div className="navbar-container4">
                        <div className="nav-menu4">
                            <NavUnlisted>
                                <div className="nav-i"><img alt="user" src={home}/><StyledLink className="link" to="/personal_portfolio">HOME</StyledLink></div>
                                <div className="nav-i"><img src={about}/><StyledLink className="link" to="/personal_portfolio/about">ABOUT</StyledLink></div>
                                <div className="nav-i"><img src={projects}/><StyledLink className="link" to="/personal_portfolio/projects">PROJECTS</StyledLink></div>
                            </NavUnlisted>
                        </div>
                    </div>
                    <div className="experience-box">
                        <h1 className="title">Experience</h1>
                        <div className="experience">
                            <div className="first">
                                <div className="second">
                                    <img src={amazon}/>
                                    <h2>Amazon</h2>
                                </div>
                                <h4>08/2022 - 01/2023</h4>
                            </div>
                            <h3>Software Engineering Intern</h3>
                            <ul>
                                <li>
                                    Feature Generation and Migration Project: Contributed to the development of causal machine learning systems for financial investment forecasting using big data processing technologies such as Spark on AWS cloud services platform
                                </li>
                                <li>
                                    Migrated features from Apache Pig to Scala Spark, resulting in improved testability and a higher quality bar for the system
                                </li>
                                <li>
                                    Led the implementation, testing, and validation of features in Scala Spark, demonstrating expertise in designing, developing, and shipping software solutions on AWS cloud
                                </li>
                                <li>
                                    Optimized feature generation run time by 40%, improving the overall efficiency of the system
                                </li>
                                <li>
                                    Gained valuable experience in data processing and analysis, highlighting expertise in working with big data processing technologies and cloud services platforms
                                </li>
                                <li>
                                    Tech stack: Scala, Java, Spark, Unit testing with Mockito, AWS (EMR, S3, EC2)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="education-box">
                        <h1 className="title">Education</h1>
                        <div className="experience">
                            <div className="first">
                                <div className="second">
                                    <img src={ada}/>
                                    <h2>Ada Developers Academy</h2>
                                </div>
                                <h4>02/2022 - 01/2023</h4>
                            </div>
                            <h3>Full-stack Software Engineering Student</h3>
                            <ul>
                                <li>
                                    Capstone Project - My Next Gym: a fullstack app which provide users an intuitive and easy-to-use interface for searching and discovering gyms, using React framework and Google Maps API
                                </li>
                                <li>
                                    Tech stack: Python, Javascript, HTML, CSS, Flask, React, ProgreSQL, Heroku, Git, Github pages, Postman, Unit testing with Pytest
                                </li>
                            </ul>
                        </div>
                        <div className="experience">
                            <div className="first">
                                <div className="second">
                                    <img src={LWtech}/>
                                    <h2>Lake Washington Institute of Technology</h2>
                                </div>
                                <h4>09/2019 - 05/2021</h4>
                            </div>
                            <h3>Student</h3>
                            <ul>
                                <li>
                                    Classes in Math and Communication
                                </li>
                            </ul>
                        </div>
                        <div className="experience">
                            <div className="first">
                                <div className="second">
                                    <img src={USM}/>
                                    <h2>Moldova State University</h2>
                                </div>
                                <h4>09/2014 - 07/2017</h4>
                            </div>
                            <h3>Bachelor's degree - Psychology </h3>
                        </div>
                    </div>
                    <div className="technologies">
                        <h1 className="title">Technologies</h1>
                        <img alt="user" src={python}></img>
                        <img src={scala}/>
                        <img src={java}/>
                        <img src={flask}/>
                        <img src={spark}/>
                        <img src={react}/>
                        <img src={css3}/>
                        <img src={html}/>
                        <img src={aws}/>
                        <img src={git}/>
                        <img src={postgresql}/>
                        <img src={intellij}/>
                        <img src={vscode}/>
                        <img src={postman}/>
                    </div>
                </div>
            </body>
        </html>
    )  
}

export default Experience;
