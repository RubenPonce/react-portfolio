import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ProjectCard extends Component {
  render() {
    const project = this.props.project;
    console.log(this.props);
    return (
      <div className="project-card">
        <div className="landing-image-container">
          <Link to={this.props.projectRoute}>
            <img className="landing-image" src={project.landingImage} />
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
        </div>
        
      </div>
    );
  }
}

export default ProjectCard;
