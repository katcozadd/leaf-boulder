import React, {Component} from 'react';
import '../components/ServicesCatering.css';
import hummus from '../images/hummus.jpg';

class HomepageContinued extends Component{
  render(){
    return (
        <section className="section group textfield">
            <div className="col span_1_of_2">
                <h3>Hey here is another thing about Leaf Vegetarian Restaurant</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis suscipit 
                doloribus explicabo tempora, eveniet, ratione, reiciendis vero fugit earum quaerat sunt maiores 
                quisquam recusandae incidunt a, eos sit temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Amet perspiciatis suscipit doloribus explicabo tempora, eveniet, ratione, reiciendis vero fugit earum 
                quaerat sunt maiores quisquam recusandae incidunt a, eos sit temporibus.</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis suscipit 
                doloribus explicabo tempora, eveniet, ratione, reiciendis vero fugit earum quaerat sunt maiores 
                quisquam recusandae incidunt a, eos sit temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Amet perspiciatis suscipit doloribus explicabo tempora, eveniet, ratione, reiciendis vero fugit earum 
                quaerat sunt maiores quisquam recusandae incidunt a, eos sit temporibus.</p> 
            </div>
            <div className="col span_1_of_2">
                <img className="img-responsive" id='hummus' src={hummus} alt="Leaf Vegetarian Restaurant - Homepage"/>
            </div>
        </section>
    )
  }
}

export default HomepageContinued