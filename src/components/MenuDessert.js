import React, {Component} from 'react'
import '../components/Menu.css';
import logo from '../images/leaf-sm.png';
import MenuNav from '../components/MenuNav';



class MenuDessert extends Component {
  render() {
    return (
    	<section>
    	<h1>Leaf Vegetarian Restaurant offers...</h1>
      		<MenuNav />
    		<h3 className="menu">dessert</h3>
			<div class="section group">
				<div class="col span_1_of_3">
					<h4 className="menu menu-title">after dinner drinks</h4>
					<ul className="menu">
						<li>dessert wines</li>
						<p>Bouchanie LH Chardonnay  10</p>
						<p>Broadbent Rainwater Madeira  11</p>
						<p>Ferreira Tawny Port10yr/20yr  8/12</p>
						<li>sipping</li>
						<p>Balvenie 12yr  11</p>
						<p>Glenfiddich Single Malt 12yr/15yr  9/12</p>
						<li>cocktails</li>
						<p>Café de Noyeaux  8</p>
						<p>Brandy Alexander  8</p>
						<p>Naughty Chai  7.5</p>
						<li>dessert tea</li>
						<p>Housemade Chai  3.5</p>
						<p>Golden Milk  7</p>
						<p>Assorted Loose Leaf Teas</p>
					</ul>
				</div>
				<div className="col span_1_of_3">
					<h4 className="menu menu-title">desserts</h4>
					<ul className="menu">
						<li>Carrot Cake  7  v</li>
						<p>"buutercream" icing, candied ginger</p>
						<li>Chocolate Drop Doughnuts  7  v</li>
						<p>coffee cream, pecans</p>
						<li>Vanilla Cheesecake  8  v, gf</li>
						<p>cherry compote, almond, date, cocoa crust</p>
						<li>Crisp  7  v, gf</li>
						<p>seasonal fruit, oat crumble</p>
						<li>Vegan Ice Cream  1.75/3  v, gf</li>
						<p>rotating flavors</p>
					</ul>
				</div>
				<div className="col span_1_of_3">
					<img className="img-responsive" id='sm-logo' src={logo} alt="Leaf Vegetarian Restaurant - Dessert"/>
				</div>
			</div>
		</section>
    );
  }
}

export default MenuDessert