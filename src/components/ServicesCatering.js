import React, {Component} from 'react';
import '../components/ServicesCatering.css';
import catering from '../images/catering.jpg';

class ServicesCatering extends Component{
  render(){
    return (
        <section className="section group textfield">
            <div className="col span_1_of_2">
                <h3>Vegetarian Catering & Parties</h3>
                <p>Let us cater your next event!</p>
                <p>Leaf offers exceptional vegetarian catering and vegan
                 catering services for all types of events. By using all natural 
                 ingredients that come from the harvest of our own farm, we craft 
                 exceptional dishes that will exceed your expectations of vegetarian 
                 food.</p>
                 <ul>
                    <li>* Vegetarian Catering</li>
                    <li>* Vegan Catering</li>
                    <li>* 100% Organic Available</li>
                    <li>* Gluten Free Catering Options</li>
                    <li>* Raw Catering Options</li>
                    <li>* Organic Wine and Spirits</li>
                    <li>* Ethnic or Theme Menus</li>
                </ul>
                <p>We offer our in-house dining rooms, at both Leaf and our sister 
                restaurant next door, Aji Latin American Restaurant, for private 
                functions and events.</p>
                <p>Leaf’s space seats 40 guests and is perfect for smaller affairs and elegant 
                plated meals.  Aji’s larger layout accommodates up to 200 people for 
                passed appetizers & cocktails, 120 for a seated coursed dinner or a buffet. 
                We offer a full bar and knowledgeable staff that can 
                accommodate any and all party needs.</p>
                <p><em>Free wireless internet is available in both spaces.</em></p>
                <p>For events at Leaf please contact: <a href="mailto:info@leafvegetarianrestaurant.com">info@leafvegetarianrestaurant.com</a></p>
                <p>For events at Aji please contact: <a href="mailto:info@ajirestaurant.com">info@ajirestaurant.com</a></p>
                <p>For catering at off-site events please contact: <a href="mailto:info@threeleafcatering.com">info@threeleafcatering.com</a></p>
            </div>
            <div className="col span_1_of_2">
                <img className="img-responsive" id='catering' src={catering} alt="Leaf Vegetarian Restaurant - Services"/>
            </div>
        </section>
    )
  }
}

export default ServicesCatering