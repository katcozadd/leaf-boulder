import React, {Component} from 'react'
import '../components/Menu.css';
import logo from '../images/leaf-sm.png';
import MenuNav from '../components/MenuNav';


class MenuCocktails extends Component {
  render() {
    return (
    	<section>
    	<h1>Leaf Vegetarian Restaurant offers...</h1>
      		<MenuNav />
      		<h3 className="menu menu-title">cocktails, wines & beers</h3>
    		<div class="section group">
				<div class="col span_1_of_3">
				<img className="img-responsive" id='sm-logo' src={logo} alt="Leaf Vegetarian Restaurant - Cocktails"/>
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
				<ul className="menu">
					<li>Uncle Arnie  7.5</li>
					<p>early grey infused bourbon, ginger puree, sweet tea, lemonade</p>
					<li>Summer Daze  9</li>
					<p>Breckenridge bourbon, fresh squeezed grapefruit juice, lemon juice, bitter, soda water</p>
					<li>Aji Margarita  8</li>
					<p>tequila, orange liqueur, fresh lime, fresh orange, agave</p>
					<li>Angry Mule  8.5</li>
					<p>house crafted pepper vodka, ginger puree, fresh lime, clove syrup, soda water</p>
					<li>Pom Spritz  9</li>
					<p>DV8 vodka, hibiscus tea, Pom juice, soda water</p>
					<li>Blackberry Daiquiri  10</li>
					<p>Spirit Hound gin, Flor de Cana rum, lime juice, muddled blackberry, salt water</p>
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
			</div>
		</section>
    );
  }
}

export default MenuCocktails