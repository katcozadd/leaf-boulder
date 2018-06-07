import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/LEAF-logo.png';
import menu from '../images/menu.png';
import '../components/Footer.css';

class Footer extends Component{
  render(){
    return (
		<footer className="section group">
			<div className="col span_1_of_4">
				<h6 className="location footer-header"><a href="https://www.google.com/maps/place/Leaf/@40.0193962,-105.2769138,17z/data=!4m12!1m6!3m5!1s0x876bec29abfacde5:0xe8c1cc324c8cb2fd!2sLeaf!8m2!3d40.0193921!4d-105.2747251!3m4!1s0x876bec29abfacde5:0xe8c1cc324c8cb2fd!8m2!3d40.0193921!4d-105.2747251" target="_blank">Location</a></h6>
				<ul>
					<li className="location">2010 16th Street</li>
					<li className="location">Boulder, CO</li>
					<li className="location">80302</li>
				</ul>
			</div>
			<div className="col span_1_of_4">
				<h6 className="footer-urls footer-header">Check out our other restaurants</h6>
				<ul className="footer-urls">
					<li><a href="http://boulderteahouse.com/" target="_blank">The Boulder Dushanbe Teahouse</a></li>
					<li><a href="http://zuccalouisville.com/" target="_blank">Zucca Italian Ristorante</a></li>
					<li><a href="http://thehuckleberry.com/" target="_blank">The Huckleberry</a></li>
					<li><a href="http://threeleaffarm.com/" target="_blank">Three Leaf Farm</a></li>
					<li><a href="https://boulderteaco.com/" target="_blank">The Boulder Tea Company</a></li>
				</ul>
			</div>
			<div className="col span_1_of_4">
				<h6 className="footer-header">Explore our website</h6>
				<ul className="footer-links">
					<li><Link to={'/about'} className="footer-links">about</Link></li>
					<li><Link to={'/services'} className="footer-links">services</Link></li>
					<li><Link to={'/menu'} className="footer-links">menu</Link></li>
					<li><Link to={'/contact'} className="footer-links">contact</Link></li>
					<li><Link to={'/contact'} className="footer-links">apply</Link></li>
				</ul>
			</div>
			<div className="col span_1_of_4">
                <img className="img-responsive footer-logo" id='logo-full' src={logo} alt="Leaf Vegetarian Restaurant - Logo"/>
			</div>
		</footer>
    )
  }
}

export default Footer 