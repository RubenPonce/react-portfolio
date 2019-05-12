import React, { Component } from 'react'

export class ProjectCard extends Component {
  render() {
      const project = this.props.project
      console.log(this.props)
    return (
      <div className="project-card">
        <h3>{project.project_name}</h3>
      </div>
    )
  }
}

export default ProjectCard
