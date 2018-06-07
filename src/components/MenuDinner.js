import React, {Component} from 'react'
import '../components/Menu.css';
import logo from '../images/leaf-sm.png';
import MenuNav from '../components/MenuNav';


class MenuDinner extends Component {
  render() {
    return (
    	<section>
    	<h1>Leaf Vegetarian Restaurant offers...</h1>
      		<MenuNav />
      		<h3 className="menu menu-title">dinner</h3>
      		<p className="menu">vegan - v gluten free - gf vegan option- vo ...many of our non vegan items can be made vegan - just ask! </p>
    		<div className="section group">
				<div className="col span_1_of_3">
				<img className="img-responsive" id='sm-logo' src={logo} alt="Leaf Vegetarian Restaurant - Dinner"/>
				<h4 className="menu menu-title" >small plates</h4>
				<ul className="menu" >
					<li>Avocado Tartare  8  v, gf</li>
					<p>marinated mushrooms, endive, cucumber orange pico de gallo</p>
					<li>Buffalo Cauliflower Tacos  7.5  v</li>
					<p>"blue cheese" dressing, celery, carrot, corn tortillas</p>
					<li>Calamari Style Oyster Mushroom  9  v</li>
					<p>sesame seeds, sweet and spicy dipping sauce</p>
					<li>Sweet Potato Gnocchi  7.5</li>
					<p>pecan pesto, cayenne-bourbon glaze, roasted mushrooms, green peas</p>
					<li>Mediterranean Board  12  vo, gfo</li>
					<p>beet hummus, marinated olives, onion marmalade, pistachio dukkah, pita, blue cheese, micro shoots</p>
				</ul>				
				</div>
				<div className="col span_1_of_3">
				<h4 className="menu menu-title">salads</h4>
				<ul className="menu">
					<li>House  10/7  v, gf</li>
					<p>sunflower seends, pickled onion, mixed greens, micro shoots, sherry vinaigrette</p>
					<li>Massaged Kale  12/9  v, gf</li>
					<p>walnuts, apples, dates, carrots, apple cider vinaigrette</p>
					<li>"Sushi"  12/9  v, gf</li>
					<p>seaweed, brown rice, daikon radish, sesame seeds, avocado, red bell peppers, carrots, mixed greens, sweet wasabi vinaigrette</p>
					<li>Mediterranean Chop  13/10  vo, gf</li>
					<p>quinoa, greek olives, pickled onions, smoked almonds, feta, english cucumber, fava beans, cherry tomatoes, mixed greens, grilled lemon oregano vinaigrette</p>
					<p><em>add "crab cake, tempeh, harissa tofu, or blackened tofu  2.5</em></p>
				</ul>
				<h4 className="menu">soup</h4>
				<p className="menu">Cup  4 |  Bowl  6</p>
				</div>
				<div className="col span_1_of_3">
				<h4 className="menu menu-title">entrees</h4>
				<p className="menu" >3 course prix available for $28</p>
				<ul className="menu" >
					<li>Mushroom Stroganoff  15  v</li>
					<p>campanelli pasta, portobello porcini mushroom sauce, roasted portobellos, wilted greens, dill gremolata, capers</p>
					<p><em>add pecorino cheese $2</em></p>
					<li>Tagine Vegetables  15  v, gfo</li>
					<p>red chermoula marinated vegetables, almond fig couscous, charred eggplant puree, green harissa, cilantro</p>
					<li>Creole Polenta  16  gf</li>
					<p>seasoned black eyed peas, vegan sausage, trinity vegetables, cheddar crisps</p>
					<li>Udon Noodles  17  v, gf</li>
					<p>mushroom and kombu broth, szechuan vegetables, oyster mushrooms, crispy tofo, sesame seeds</p>
					<li>Jamaican Jerk Tempeh  17  v, gf</li>
					<p>coconut plantain sauce, forbidden black rice, three leaf farm fresh vegetables, crispy shallots, scallions</p>
					<li>BBQ Seitan  16 v, gfo</li>
					<p>peach bbq sauce, potato salad, three leaf farm fresh vegetables, cripsy shallots, cilantro, peanuts</p>
					<li>Burmese Corn Curry  17  v, gf</li>
					<p>shan chickpea tofu, cabbage salad, coconut rice, crispy shallots, cilantro, peanuts</p>
					<li>Chinese Vegetable Moo-Shu  15  v</li>
					<p>coconut rice, hoisin, tofu, cabbage, carrot, mushroom, beet ribbons, scallion</p>
				</ul>
				</div>
			</div>
		</section>
    );
  }
}

export default MenuDinner





