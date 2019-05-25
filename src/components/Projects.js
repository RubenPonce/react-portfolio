import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"

export class Projects extends Component {


  render() {
    const projects = this.props.projects
    return (
      <div>
      <div className="project-intro">
        <h2>Projects: </h2>
        <p>Click for more info</p>
        </div>
        <div className="projects-container">
          {projects.map(projectCard => {
            return (
                <ProjectCard {...this.props} project={projectCard} key={projectCard.id} projectRoute={`/project/${projectCard.id}`}/>
              )
          })}
        </div>
      </div>

    )
  }
}


export default Projects
