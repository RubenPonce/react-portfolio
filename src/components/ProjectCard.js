import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// import images from '../../public/images/pine.png'
import styled from "styled-components";
import {desktopView} from "./ResponsiveVars";

const LandingImageContainer = styled.div`
    width: 80%;
    align-self: flex-end;
    margin: 3em auto 0 auto;
`
const ProjectCardDiv = styled.div`
  display: flex;
  min-height: 500px;
  align-items: center;
  border-radius: 5px;
  width: 75%;
  box-shadow: 0px 0px 4px 0px rgba(50, 50, 50, 0.7);
  background: #efefef;
  margin: 1em;
  .project-tech{
    display: flex;
    align-self: center;
    justify-content: space-around;
    margin: 1em auto;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
      i {
      margin: 1.5em 1em 0 1em;
      color: #3aa7ff;
   }
  }
  
  &:nth-child(odd){
   flex-direction: row-reverse;
  }
  
  
img{
  width: 85%;
  margin: 0 auto;
  box-shadow: 6px 8px 42px 1px rgba(0, 0, 0, 0.15);
}


@media(min-width: ${desktopView}px){
    img{
    margin-top: 2em;
     width: 75%;
    }
    
    max-width: 1350px;
    padding: 3em;
    

}
`
export class ProjectCard extends Component {
  render() {
    const project = this.props.project;

    return (
      <ProjectCardDiv className="project-card">
        <LandingImageContainer>
          <img
            src={this.props.project.landingImage}
          />
          <div className="project-tech">
            {project.technologies.map((tech, i) => (
              <i className={`fab fa-${tech} fa-2x`} key={i} />
            ))}
          </div>
        </LandingImageContainer>
        <div className="project-header">
          <h3>{project.project_name}</h3>
          <p> {project.description}</p>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <Button
              color="primary"
              className="project-cta"
              style={{ margin: "0 .5em" }}
              outline
            >
              live demo
            </Button>
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              color="primary"
              className="project-cta"
              style={{ margin: "0 .5em" }}
              outline
            >
              source code
            </Button>
          </a>
        </div>
      </ProjectCardDiv>
    );
  }
}

export default ProjectCard;
