import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import {Overlay} from "./ResponsiveVars";
const ProjectContainer = Overlay('173');//degree rotate overlay

export class Projects extends Component {
  render() {
    const projects = this.props.projects;
    return (
      <div>
        <div className="project-intro">
          <h2>Projects: </h2>
        </div>

            <ProjectContainer>
          {projects.map(projectCard => {
            return (
              <ProjectCard
                {...this.props}
                project={projectCard}
                key={projectCard.id}
              />
            );
          })}
            </ProjectContainer>

      </div>
    );
  }
}

export default Projects;
