import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from 'reactstrap'
import images from './images/pine.png'

export class ProjectCard extends Component {
  render() {
    const project = this.props.project;
    console.log(this.props);
    
    return (
      <div className="project-card">
        <div className="landing-image-container">
          <Link to={this.props.projectRoute}>
            <img className="landing-image" src={'./images/pine.png'} />
           
          </Link>
          <div className="project-tech">
            {project.technologies.map((tech, i) => (
              <i className={`fab fa-${tech} fa-2x`} />
            ))}
          </div>
        </div>
        <div className="project-header">
        <h3>{project.project_name}</h3>
        <p> {project.description}</p>
        <Button color="primary" style={{margin: '0 .5em'}} outline><a href={project.demo} target="_blank" rel="noopener noreferrer">live demo</a></Button>
        <Button color="primary" style={{margin: '0 .5em'}} outline><a href={project.sourceCode} target="_blank" rel="noopener noreferrer">source code</a></Button>
        </div>
        
      </div>
    );
  }
}

export default ProjectCard;
