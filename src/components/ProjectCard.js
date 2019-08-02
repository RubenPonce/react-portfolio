import React, { Component } from "react";
import { Button } from "reactstrap";

export class ProjectCard extends Component {
  render() {
    const project = this.props.project;

    return (
      <div className="project-card">
        <div className="landing-image-container">
          <img
            className="landing-image"
            src={this.props.project.landingImage}
            alt="project card "
          />
          <div className="project-tech">
            {project.technologies.map((tech, i) => (
              <i className={`fab fa-${tech} fa-2x`} key={i} />
            ))}
          </div>
        </div>
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
      </div>
    );
  }
}

export default ProjectCard;
