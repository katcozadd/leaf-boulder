import React, {Component} from 'react';
import '../components/AboutIntro.css';



class AboutIntro extends Component{
  render(){
    return (
    	<section className="about-intro">
    		<h1>Leaf is a vegetarian restaurant <br /> dedicated to...</h1>
    		<p>creating an <b>outstanding</b> and <b>creative</b> vegetarian dining experience.</p>
    		<p>Our passion for fresh, local ingredients led us to create Three Leaf Farm in Lafayette,
    		CO which allows us to seasonally provide organic, freshly harvested produce and herbs,
    		and free range eggs, and strengthens our commitment to cultivating a more sustainably 
    		focused company.</p>
            <h5>our company and our farm</h5>
            <p>Leaf Vegetarian Restaurant is operated by Three Leaf Concepts,
            a local, family owned restaurant group including The Boulder
            Dushanbe Teahouse, The Chautauqua Dining Hall, The Huckleberry and Zucca Italian Ristorante in Louisville and our catering
            company, Three Leaf Catering.</p>
            <p>Our Commitment to fresh, local and organic ingredients led us to create Three Leaf Fam in Lafayette, CO which allows us
            to provide organic, seasonal, freshly harvested ingredients and strengthens our commitment to cultivating a more sustainably 
            focused company. Our Chefs work directly with our farmer to ensure the highest quality seasonal ingredients for our guests.</p>
    	</section>
    )
  }
}

export default AboutIntro