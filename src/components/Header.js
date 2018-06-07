import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/leaf-sm.png';
import menu from '../images/menu.png';
import '../components/Header.css';

class Header extends Component{
	
	myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

  render(){
    return (
	<nav className="topnav" id="myTopnav">
		<Link to ="/" id="home-link">LEAF</Link>
		<Link to={'/about'} className="links">about</Link>
		<Link to={'/brunch'} className="links">menu</Link>
		<Link to={'/services'} className="links">services</Link>
		<Link to={'/contact'} className="links">contact</Link>
		<a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
			<i className="fa fa-bars"><img className="icon" id='logo' src={menu} alt="menu"/></i>
		</a>
	</nav>
    )
  }
}

export default Header 