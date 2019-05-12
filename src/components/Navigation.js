import React from 'react'
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
export default function Navigation() {
    
  return (
    <div className="header">
    <div  className="nav">
          <Route path="/project/:id" render={()=><Link to="/"  >Projects </Link>} />
          <a href="https://sourcerer.io/rubenponce" target="_blank" rel="noopener noreferrer">Technologies Used</a>
          <Link to="/" >Contact</Link>
          
    </div>
    <div className="social-links">
       <a href="https://www.linkedin.com/in/ruben-ponce/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a> 
       <a href="https://www.github.com/rubenponce/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
       <a href="https://www.twitter.com/titratecode/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
   
    </div>
    </div>
  )
}
