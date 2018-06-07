import React, {Component} from 'react'
import '../components/Menu.css';
import logo from '../images/leaf-sm.png';
import MenuNav from '../components/MenuNav';


class MenuLunch extends Component {
  render() {
    return (
    	<section>
    	<h1>Leaf Vegetarian Restaurant offers...</h1>
      		<MenuNav />
    		<h3 className="menu menu-title">lunch</h3>
    		<p className="menu">vegan - v gluten free - gf vegan option- vo ...many of our non vegan items can be made vegan - just ask! </p>
			<div className="section group">
				<div className="col span_1_of_3">
				<img className="img-responsive" id='sm-logo' src={logo} alt="Leaf Vegetarian Restaurant - Lunch"/>
				<h4 className="menu menu-title">small plates</h4>
				<ul className="menu">
					<li>Latke  7  v, gf</li>
					<p>apple commpote, sour cream, scallion</p>
					<li>Avocado Tartare  8  v, gf</li>
					<p>marinated mushroom, endive, cucumber-orange pico de gallo</p>
					<li>Buffalo Cauliflower Tacos  7.5  v</li>
					<p>corn tortillas, "blue cheese" dressing, celery, carrot</p>
					<li>Sweet Potato Gnocchi  7.5</li>
					<p>pecan pesto, cayenne bourbon glaze, mushrooms, green peas </p>
				</ul>	
				<h4 className="menu menu-title">soup</h4>
				<p className="menu">Cup  4 |  Bowl  6</p>			
				</div>
				<div class="col span_1_of_3">
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
				<h4 className="menu menu-title">sandwiches</h4>
				<ul className="menu">
					<li>Mushroom Burger  11  vo</li>
					<p>portabella mushroom, walnut, pepper jelly, red onion, lettuce, swiss, brioche <br />
					<em>*add an over easy egg  1.5</em></p>
					<li>Reuben  11  vo</li>
					<p>choice of seitan or tempeh, housemade sauerkraut, swiss cheese, vegan remoulade, rye bread</p>
					<li>Vegan Crab Cake Sandwich  11  v</li>
					<p>tempeh-tofu-wakame cakes, mixed greens, tarter sauce, brioche</p>
					<li>*Egg & Croissant  11  vo</li>
					<p>housemade vegan sausage, pepper jack cheese, avocado, tomato, veganaise, mixed greens</p>
					<li>Lentil Falafel  10</li>
					<p>beet hummus, tahini, cucumber, tomato, carrot, mixed greens, pita</p>
				</ul>
				</div>
				<div className="col span_1_of_3">
					<h4 className="menu menu-title">entrees</h4>
					<ul className="menu">
						<li>Huevos Rancheros  10.5  vo, gf</li>
						<p>corn tortillas, fontina cheese, Mexican rice, black beans, green chili, pico de gallo, guacamole, choice of eggs or tofu scramble</p>
						<li>Grilled Flatbread  11.5  vo</li>
						<p>beet hummus, onion marmalade, pistachio dukkah, rose cranberries, pomegranate molasses, micro shoots, feta</p>
						<li>Jamaican Jerk Tempeh  14  v, gf</li>
						<p>forbidden black rice, coconut plantain sauce, sautéed greens, fruit salsa</p>
						<li>BBQ Seitan  14  v, gfo</li>
						<p>peach bbq sauce, potato salad, three leaf farm seasonal vegetables, crispy shallots, scallions</p>
						<li>Middle East Bowl  12  v, gf</li>
						<p>quinoa, pistachio dukkah, pumpkin seed, pomegranate molasses, kale, broccoli, pickled radish, rosewater cranberries, orange, tahini garlic dressing</p>
					</ul>
				</div>
			</div>
								<p><em>*These items may be served raw or undercooked based on your specification, or contain raw or undercooked ingredients.
					Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness, especially
					if you gave certain medical conditions. All of our ingredients may not be listed on the menu; please be specific with your server regarding
					any dietary restrictions. <br /> an 18% gratuity may be added to parties of 6 or more, split plate fee $3</em></p>
		</section>
    );
  }
}

export default MenuLunch





