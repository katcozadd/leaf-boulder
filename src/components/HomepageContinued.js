import React, {Component} from 'react';
import '../components/ServicesCatering.css';
import hummus from '../images/hummus.jpg';

class HomepageContinued extends Component{
  render(){
    return (
        <section className="section group textfield">
            <div className="col span_1_of_2">
                <h3>Read what other's have to say about Leaf Vegetarian Restaurant</h3>
                <p>Owned and operated by Chef Rachel Best, Leaf is the epitome of Boulder's health-centric 
                mindset and lifestyle. The restaurant is dedicated to creating an outstanding and creative 
                vegetarian dining experience, serving breakfast, lunch, and dinner items such as the 
                quinoa-polenta cuneo.</p> 
                <p><em>- Eater Denver</em></p>
                <p>Expect to spend more green at The Leaf, where the produce is supplied whenever possible by 
                Three Leaf Farm in Lafayette. But this artful, gourmet vegetarian haven is worth every penny. 
                There's an artistry to the food at this special-occasion venue, which really shines at brunch 
                with their biscuits and wild mushroom vegan gravy and vegan French toast — with banana bread 
                pudding, Boulder breakfast tea anglaise and seasonal berries. The best deals are at the 
                weekday-only lunches, with $10 or $11 sandwiches. Vegan crab cakes, ruebens and mushroom burgers 
                re some of the sandwich options. Or try bargain-priced small bites during the 3 to 6 p.m. daily 
                happy hour, including buffalo cauliflower tacos, samosa potato cakes and grilled flatbread with 
                beet hummus, pickled carrots and fava beans.</p> 
                <p><em>- Colorado Daily</em></p>
            </div>
            <div className="col span_1_of_2">
                <img className="img-responsive" id='hummus' src={hummus} alt="Leaf Vegetarian Restaurant - Homepage"/>
            </div>
        </section>
    )
  }
}

export default HomepageContinued