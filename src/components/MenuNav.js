import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../components/Header.css';

class MenuNav extends Component{
render(){
    return (
	<nav className="" id="menu-nav">
		<Link to ="/brunch" className="menu-nav" id="brunch">Brunch</Link>|
		<Link to={'/lunch'} className="menu-nav">Lunch</Link>|
		<Link to={'/dinner'} className="menu-nav">Dinner</Link>|
		<Link to={'/dessert'} className="menu-nav">Dessert</Link>|
		<Link to={'/happy-hour'} className="menu-nav">Happy Hour</Link>|
		<Link to={'/cocktails'} className="menu-nav">Cocktails</Link>
	</nav>
    )
  }
}

export default MenuNav 