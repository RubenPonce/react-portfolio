import React from 'react'
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
export default class Navigation extends React.Component {
    
    handleScroll = () =>{
       const header =  document.querySelector('.header');
        if(window.scrollY > 15){  
            header.classList.add('scroll-effect');
            if( header.classList.contains('remove-scroll')){header.classList.remove('remove-scroll')}
        } else{
            header.classList.replace('scroll-effect','remove-scroll')
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
      }

  render(){return (
    <div className="header">
    <div  className="nav">
          <Route path="/project/:id" render={()=><Link to="/"  >Projects </Link>} />
          <a href="https://sourcerer.io/rubenponce" target="_blank" rel="noopener noreferrer">Technologies Used</a>
          <a href="#contact">Contact</a>
          
    </div>
    <div className="social-links">
       <a href="https://www.linkedin.com/in/ruben-ponce/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a> 
       <a href="https://www.github.com/rubenponce/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
       <a href="https://www.twitter.com/titratecode/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
   
    </div>
    </div>
  )}
}
