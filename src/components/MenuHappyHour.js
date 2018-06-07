import React, {Component} from 'react'
import '../components/Menu.css';
import logo from '../images/leaf-sm.png';
import MenuNav from '../components/MenuNav';



class MenuHappyHour extends Component {
  render() {
    return (
    	<section>
    	<h1>Leaf Vegetarian Restaurant offers...</h1>
      	<MenuNav />
    	<h3 className="menu menu-title">happy hour</h3>
    	<p className="menu">everyday from 3-6</p>
    	<div className="section group">
			<div className="col span_1_of_3">
			<img className="img-responsive" id='sm-logo' src={logo} alt="Leaf Vegetarian Restaurant - Happy Hour"/>
			<h4 className="menu menu-title" >sides</h4>
			<ul className="menu">
				<li>Bowl of Fries  3  v, gf</li>
				<p>sweet potato and Yukon, housemade agave ketchup</p>
				<li>Crispy Harissa Tofu  4  v, gf</li>
				<p>tamarind-date jam, peanuts</p>
			</ul>
			<h4 className="menu menu-title" >greens</h4>
			<ul className="menu">
				<li>Massaged Kale Salad  5.5  v, gf</li>
				<p>apples, walnuts, dates, carrots, apple cider vinaigrette</p>
			</ul>
			</div>
			<div className="col span_1_of_3">
			<h4 className="menu menu-title" >small plates</h4>
			<ul className="menu">
				<li>Sweet Potato Gnocchi  6</li>
				<p>pecan pesto, beets, winter squash, fava beans, cayenne-bourbon glaze</p>
				<li>Buffalo Cauliflower Tacos  3  v</li>
				<p>"blue cheese" dressing, celery, carrot, corn tortillas</p>
				<li>Grilled Flatbread  7.5  vo</li>
				<p>beet hummus, onion marmalade, rose cranberries, pomegranate molasses, pistachio dukkah, micro shoots, feta</p>
				<li>"Crab" Cake Slider  3.5  v</li>
				<p>tempeh-tofu-wakame patty, tarter sauce</p>
				<p><em>with French fries add 1.5</em></p>
				<li>Mushroom Burger Slider  3.5  v</li>
				<p>walnut-quinoa patty, pepper jelly, raw red onion</p>
				<p><em>with French fries add 1.5 | with swiss cheese add .5</em></p>
			</ul>
			</div>
			<div className="col span_1_of_3">
			<h4 className="menu menu-title" >beverages</h4>
			<ul className="menu">
				<li>House Red, House White Bubbles  5</li>
				<li>Well Cocktails  4.5</li>
				<p>old forester, svedka, broker's, dewars, don q, sauza</p>
				<li>Bottled & Canned Beer</li>
				<p>8 Second Kolsch, Elevation Brewing   4</p>
				<p>New Planet Ale, New Planet Beer (gf)  5</p>
				<p>Grasshop-ah Cider, Colorado Cider Co.  5</p>
				<p>Lava Lake Wit, Crazy Mountain Brewing  4</p>
				<p>Escape to Colorado IPA, Epic Brewing  4</p>
				<p>Face Down Brown, Telluride Brewing  4</p>
				<br />
				<li>Pom Spritz  7</li>
				<p>DV8 vodka, pom juice, hibiscus, soda water</p>
				<li>Aji Margarita  6</li>
				<p>tequila, agave, orange liqueur, lime juice, fresh orange</p>
				<li>Angry Mule  6.5</li>
				<p>pepper vodka, clove syrup, housemade ginger beer</p>
				<li>Uncle Arnie  5.5</li>
				<p>earl grey bourbon, ginger, sweet tea, lemonade</p>
			</ul>
			</div>
		</div>
		</section>
    );
  }
}



export default MenuHappyHour