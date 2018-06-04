import React, {Component} from 'react';
import '../components/ServicesCatering.css';
import wedding from '../images/wedding.jpg';


class ServicesImage extends Component{
  render(){
    return (
    	<div>
	        <section>
                <img className="img-responsive" id='wedding' src={wedding} alt="Leaf Vegetarian Restaurant - Services"/>
	        </section>
        </div>
    )
  }
}

export default ServicesImage