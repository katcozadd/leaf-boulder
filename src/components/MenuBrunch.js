import React, {Component} from 'react'
import '../components/Menu.css';
import logo from '../images/leaf-sm.png';
import MenuNav from '../components/MenuNav';




class MenuBrunch extends Component {
  render() {
    return (
    	<section>
    		<h1>Leaf Vegetarian Restaurant offers...</h1>
      		<MenuNav />
    		<h3 className="menu menu-title">brunch</h3>
    		<p className="menu">vegan - v gluten free - gf vegan option- vo ...many of our non vegan items can be made vegan - just ask! </p>
			<div className="section group">
				<div className="col span_1_of_3">
				<img className="img-responsive" id='sm-logo' src={logo} alt="Leaf Vegetarian Restaurant - Brunch"/>
				<h4 className="menu menu-title">small plates</h4>
				<ul className="menu">
					<li>Daily Vegan Pastry  5  v</li>
					<li>Biscuits & Mushroom Gravy  6  v</li>
					<p>housemade biscuits, mushroom gravy, scallions, olive oil</p>
					<li>Mushroom Avocado Tartar  8  v, gf</li>
					<p>marinated mushrooms, endive, cucumber-orange pico de gallo</p>
					<li>Amaranth Granola  8  v, gf</li>
					<p>coconut chia seed pudding, cocobut milk, walnuts, cranberries, maple syrup</p>
					<li>Potato Latkes  7  v, gf</li>
					<p>vegan sour cream, apple compote, scallions</p>
					<li>Chocolate Drop Donuts  7  v, gf</li>
					<p>coffee cream, pecans, coconut sugar</p>
					<li>Dark Cherry Peach Smoothie  5  v, gf</li>
					<p>coconut chia seed crumble, coconut sugar</p>
				</ul>				
				</div>
				<div className="col span_1_of_3">
				<h4 className="menu menu-title">salads</h4>
				<ul className="menu">
					<li>House  10/7  v, gf</li>
					<p>sunflower seeds, pickled onion, micro shoots, mixed greens, sherry vinaigrette</p>
					<li>Massaged Kale  12/9  v, gf</li>
					<p>walnuts, apples, dates, carrots, apple cider vinaigrette</p>
					<li>"Sushi"  12/9  v, gf</li>
					<p>seaweed, brown rice, daikon radish, sesame seeds, avocado, red bell peppers, carrots, mixed greens, sweet wasabi vinaigrette</p>
					<li>Mediterranean Chop  13/10  vo, gf</li>
					<p>quinoa, greek olives, pickled onions, smoked almonds, feta, english cucumber, fava beans, cherry tomatoes, mixed greens, grilled lemon oregano vinaigrette</p>
					<p><em>add "crab cake, tempeh, harissa tofu, or blackened tofu  2.5</em></p>
				</ul>
				<h4 className="menu menu-title">sandwiches</h4>
				<p className="menu"><em>served with your choice of soup, house salad or fries<br/>
				substitute vegan cheese on any dish $1, substitute gluten free bread $1</em></p>
				<ul className="menu">
					<li>Vegan Crab Cake Sandwich  11  v</li>
					<p>tempeh-tofu-wakame cakes, mixed greens, tarter sauce, brioche</p>
					<li>*Egg Sandwich  11  vo</li>
					<p>eggs, housemade vegan sausage, avocado, tomato, veganaise, pepper jack cheese, mixed greens, croissant</p>
					<li>Mushroom Burger  11  vo</li>
					<p>portabella mushroom, walnut, pepper jelly, red onion, lettuce, swiss, brioche <br />
					<em>*add an over easy egg  1.5</em></p>
					<li>Reuben  11  vo</li>
					<p id="sando-end">choice of seitan or tempeh, housemade sauerkraut, swiss cheese, vegan remoulade, rye bread</p>
				</ul>
				</div>
				<div className="col span_1_of_3">
					<h4 className="menu menu-title">soup</h4>
					<p className="menu">Cup  4 |  Bowl  6</p>
					<h4 className="menu menu-title">entrees</h4>
					<ul className="menu">
						<li>Huevos Rancheros  10.5  vo, gf</li>
						<p>corn tortillas, fontina cheese, Mexican rice, black beans, green chili, pico de gallo, guacamole, choice of eggs or tofu scramble</p>
						<li>Vegan French Toast  11  v</li>
						<p>banana bread pudding, berries, roasted peach coulis</p>
						<li>*Scramble  11  vo</li>
						<p>eggs or tofu scramble, vegan sausage, seasonal vegetables, vegan biscuit, guacamole, ranchero sauce, choice of potatoes, fruit or house salad</p>
						<li>Middle East Quinoa Bowl  11  v, gf</li>
						<p>broccoli, kale, orange slices, pickled radish, rosewater cranberries, pumpkin seed, pomegranate molasses, dukkah, roasted garlic tahini sauce</p>
						<li>*Falafel Benedict  10.5  gfo</li>
						<p>poached egg & hollandaise, choice of potatoes, fruit, or house salad</p>
						<li>*Crab Cake Benedict  10.5</li>
						<p>poached egg & hollandaise, choice of potatoes, fruit, or house salad</p>
						<li>*Chef's Omelet  12  gf</li>
						<p>chef's daily selection of veggies & cheese, choice of potatoes, fruit, or house salad</p>
						<li>*Creole Polenta  11  gf</li>
						<p id="entree-end">creole spice vegetable trinity, sausage, greens, egg, cheddar polenta, choice of eggs or tofu scramble</p>
					</ul>
				</div>
				<div className="section group">
					<div class="col span_1_of_3">
					<h4 className="menu menu-title">non-alcoholic</h4>
					<ul className="menu">
						<li>Golden Milk  5</li>
						<li>Rowdy Mermaid Kombucha  6</li>
						<li>Beet, Apple, Carrot Juice  5</li>
						<li>Spinach, Kale, Apple, Orange Juice  5</li>
						<li>Fresh Squeezed OJ & Grapefruit Juices  5</li>
						<li>Iced Tea  2.5</li>
						<li>Hibiscus Cooler  3</li>
						<li>Matcha Lemonade  3</li>
						<li>Blackberry Mint Lemonade  3.75</li>
						<li>Housemade Ginger Beer  3</li>
						<li>Voss Sparkling Water  3</li>
						<li>Rainforest Ice Tea  3.25</li>
						<li>Fruit Juices  3</li>
						<p id="na-end">apple, orange, pineapple, cranberry, grapefruit</p>
					</ul>
					<h4 className="menu menu-title">organic loose leaf tea</h4>
					<ul className="menu">
						<li>black</li>
						<p>English Breakfast, Boulder Breakfast, Earl Grey  3.5 <br /> Peach Apricot  4</p>
						<li>green</li>
						<p>Mao Zhen Hair Needle (China), Gen Mai Cha - Kamakura (Japan)  4 <br /> Jasmine  4.5</p>
						<li>white/oolong</li>
						<p>Wuyi Rock Oolong  4.5 <br /> White Peony White, White Peach  4</p>
						<li>herbal</li>
						<p id="tea-end">Lemon Rooibos, Yerba Maté, Mountain Chamomile, Rocky Mountain Mint, 7 Chakra  3.5</p>
					</ul>
					</div>
					<div className="col span_1_of_3">
					<h4 className="menu menu-title">cocktails</h4>
					<h5 className="menu cocktail">chilled</h5>
					<ul className="menu">
						<li>Café de Noyeaux  8</li>
						<p>housemade coffee liquer, amaretto, iced coffee, cream (pea milk/soy option)</p>
						<li>Chai-tini  8</li>
						<p>vodka, house chai, cream (pea milk/ soy option)</p>
						<li>Vegan Bloody  8</li>
						<p>vodka, gin or tequila, house crafted vegan bloody mary mix </p>
						<li>F.J. Mimosa  7</li>
						<p id="chilled-end">house sparkling with your choice of fresh juice</p>
					</ul>
					<h5 className="menu cocktail">hot</h5>
					<ul className="menu">
						<li>Leafy Toddy  8</li>
						<p>whisky, lemon, clove syrup</p>
						<li>Naughty Chai  7.5</li>
						<p id="hot-end">housemade coffee liquer, housemade chai soy milk (.50) pea milk (1.00)</p>
					</ul>
					<h5 className="menu cocktail">beer</h5>
					<ul className="menu">
						<li>8 Second Kolsch, Elevation Brewing  5.5</li>
						<li>New Planet Ale, New Planet Beer (gf)  6</li>
						<li>Grasshop-ah Cider, Colorado Cider Co.  6</li>
						<li>Lava Lake Wit, Crazy Mountain Brewing  5.5</li>
						<li>Escape to Colorado IPA, Epic Brewing  5.5</li>
						<li id="beer-end">Face Down Brown, Telluride Brewing  5.5</li>
					</ul>
					</div>
					<div className="col span_1_of_3">
					<h4 className="menu menu-title">wine</h4>
					<ul className="menu">
						<li>sparling wine</li>
						<p>Kenwood Yulupa Cuvée Brut (split), Sonoma, CA  9</p>
						<p>Rack and Riddle Brut, Sonoma, CA  48</p>
						<p>Argyle Brut Rosé 2012, Dundee Hills AVA, OR  45</p>
						<li>white wine</li>
						<p>Zocker Gruner Veltliner 2014, Edna Valley, CA (SIP)  47</p>
						<p>Trefethen Dry Riesling 2016, Napa, CA  56</p>
						<p>La Crema Pinot Gris 2015, Monterey, CA (SUS)  51</p>
						<p>Kendal Jackson Estate Chardonnay 2015, Santa Maria Valley, CA  55</p>
						<li>red wine</li>
						<p>Argyle Reserve Pinot Noir 2014, Willamette, OR (LIVE)  73</p>
						<p>Benziger Cabernet Sauvignon 2014, Sonoma, CA (SUS)  50</p>
						<p>Barberani 2015 Rosso "Polago", Umbria IGT, Italy  56</p>
						<p>Paul Dolan Zinfandel 2015, Mendocino, CA  48</p>
						<p>Jack London Merlot 2012, Sonoma, CA  48</p>
						<p id="wines-end">Domaine De La Terre Rouge 2012, Sierra, CA  65</p>
					</ul>
					<h4 className="menu menu-title">wine by the glass - glass/bottle</h4>
					<ul className="menu">
						<li>Foris Riesling 2016, Rouge Valley, OR  12/48</li>
						<li>Vino Pinot Grigio 2015, Columbia Valley, WA  9/36</li>
						<li>Arona Sauvignon Blanc 2016, Marlborough, NZ (SUS)  10/40</li>
						<li>Guy Drew Chardonnay 2015 McElmo Canyon, CO  11/44</li>
						<li>Underwood Rosé 2016, Willamette Valley, OR  8/32</li>
						<li>Girasole Pinot Noir 2014, Mendocino, CA (CCOF)  11/44</li>
						<li>Thomas Henry Cabernet Sauvignon, Sonoma, CA  10/40</li>
						<li>Plum Creek Merlot 2012, Grand Valley, CO  11/44</li>
						<li id="wines-end">Piatelli Malbec 2016, Mendoza, Argentina  9/36</li>
					</ul>
					</div>
					<p><em>*These items may be served raw or undercooked based on your specification, or contain raw or undercooked ingredients.
					Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness, especially
					if you gave certain medical conditions. All of our ingredients may not be listed on the menu; please be specific with your server regarding
					any dietary restrictions. <br /> an 18% gratuity may be added to parties of 6 or more, split plate fee $3</em></p>
				</div>
			</div>
		</section>
    );
  }
}

export default MenuBrunch