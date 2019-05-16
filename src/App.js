import React, { Component } from 'react'
import './App.css';
import data from "./data"
import {Route} from 'react-router-dom'
import Projects from './components/Projects'
import ProjectCard from  './components/ProjectCard';
import Introduction from './components/Introduction';
import Project from './components/Project'
import Navigation from './components/Navigation';
import Contact from './components/Contact'

export class App extends Component {
  state = {
    projects:data
  }
  // componentDidMount(){ WHEN SERVER IS UP, MAKE AXIOS SET STATE IN APP
  //   this.setState({
  //     projects: data
  //   })
  // }

  render() {
    
    return (
      <div className="App">
        <Navigation/>
        <Route exact path="/" render={(props)=>{
         return ( 
         <div>
             <Introduction />
            <Projects {...props} projects={this.state.projects} />  
          </div>)
        }} />
        <Route exact path="/project/:id" render={(props)=><Project {...props} projects={this.state.projects} /> }/>
        <Contact/>
      </div>
    )
  }
}

export default App

