import React from 'react'
import {NavLink} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {mobileView} from "./ResponsiveVars";
export default class Navigation extends React.Component {
    state = {
        useHamburger: false,
        hamburgerSet: false,
    }
    handleScroll = () =>{
       const header =  document.querySelector('.header');
        if(window.scrollY > 15){  
            header.classList.add('scroll-effect');
            if( header.classList.contains('remove-scroll')){header.classList.remove('remove-scroll')}
        } else{
            header.classList.replace('scroll-effect','remove-scroll')
        }
    }
    handleResize = (e) =>{
        if(window.screen.width <= mobileView){
            if(!this.state.hamburgerSet) {
                this.setState({
                    useHamburger: !this.state.useHamburger,
                    hamburgerSet: true,
                })
            }
            return;
        }
        else if(this.state.hamburgerSet){
            this.setState({
                hamburgerSet: false,
                useHamburger: !this.state.useHamburger,

            })

        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
      }

  render(){
      console.log(this.props)
        return (
    <div className="header">
        {this.state.useHamburger ? null : (
            <div  className="nav">
                <NavLink exact={true} to="/">Projects</NavLink>
                <NavLink exact={true} to="/contact">Contact</NavLink>
                <a href="https://sourcerer.io/rubenponce" target="_blank" rel="noopener noreferrer">Tech Stack Stats</a>
            </div>)}
    <div className="social-links">
        {this.state.useHamburger ? <a> <i className="fas fa-bars fa-2x"></i></a> :  window.screen.width <= mobileView ? <a className="hamburger"> <i className="fas fa-bars fa-2x"></i></a> : null}
        {/*<div className="hamburger-menu">*/}
        {/*    <NavLink exact={true} to="/">Projects</NavLink>*/}
        {/*    <NavLink exact={true} to="/contact">Contact</NavLink>*/}
        {/*    <a href="https://sourcerer.io/rubenponce" target="_blank" rel="noopener noreferrer">Tech Stack Stats</a>*/}
        {/*</div>*/}
       <a href="https://www.linkedin.com/in/ruben-ponce/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a> 
       <a href="https://www.github.com/rubenponce/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
       <a href="https://www.twitter.com/titratecode/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
   
    </div>
    </div>
  )}
}
