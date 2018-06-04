import React, {Component} from 'react';
import '../components/AboutImages.css';
import bowl from '../images/mushroombowl.jpg';
import moscow from '../images/moscow.jpg';
import burger from '../images/burger.jpg';
import room from '../images/room.jpg';

class AboutImages extends Component{
  render(){
    return (
        <section className="section group">
            <div className="col span_1_of_2">
                <img className="img-responsive" id='bowl' src={bowl} alt="Leaf Vegetarian Restaurant - About"/>
                <img className="img-responsive" id='moscow' src={moscow} alt="Leaf Vegetarian Restaurant - About"/>
            </div>
            <div className="col span_1_of_2">
                <img className="img-responsive" id='burger' src={burger} alt="Leaf Vegetarian Restaurant - About"/>
                <img className="img-responsive" id='room' src={room} alt="Leaf Vegetarian Restaurant - About"/>
            </div>
        </section>
    )
  }
}

export default AboutImages