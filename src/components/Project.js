
import ProjectCard from './ProjectCard'
import React, { Component } from 'react'

export class Project extends Component {
    state = {
        project: {},
    }
    componentDidMount(){
        console.log(this.props)
        this.props.projects.map(project=>{
            console.log(project.id)
            if(this.props.match.params.id===project.id){
                this.setState({
                    project: project
                })
            }
        })
        
    }

  render() {
    return (
      <div>
        <h1>{this.state.project.project_name}</h1>
        <p>{this.state.project.description}</p>
      </div>
    )
  }
}

export default Project

