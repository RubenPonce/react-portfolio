import React, { Component } from 'react'
import ProjectCard from "./ProjectCard"
import { Link } from 'react-router-dom';

export class Projects extends Component {


  render() {
    const projects = this.props.projects
    console.log(projects);

    return (
      <div>

        <h2>Projects: </h2>
        <p>Click for more info</p>
        <div className="projects-container">
          {projects.map(projectCard => {
            return (

              <Link to={`/project/${projectCard.id}`}>
                <ProjectCard {...this.props} project={projectCard} key={projectCard.id} />
              </Link>)
          })}
        </div>
      </div>

    )
  }
}


export default Projects
