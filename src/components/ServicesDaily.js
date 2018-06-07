import React, {Component} from 'react';
import '../components/ServicesCatering.css';
import restaurant from '../images/restaurant.jpg';

class ServicesDaily extends Component{
  render(){
    return (
        <section className="section group textfield">
            <div className="col span_1_of_2">
                <img className="img-responsive" id='restaurant' src={restaurant} alt="Leaf Vegetarian Restaurant - Services"/>
            </div>
            <div className="col span_1_of_2">
                <h3>Daily Operations</h3>
                <p>Hours of Operation:</p>
                 <ul>
                    <li>* Lunch: 11:30am – 3pm</li>
                    <li>* Dinner: 5pm – Close</li>
                    <li>* Brunch: Saturday & Sunday 10am – 3pm</li>
                    <li>* Happy Hour: 3pm – 6pm…every day</li>
                </ul>
            </div>
        </section>
    )
  }
}

export default ServicesDaily