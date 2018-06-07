import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomepageContainer from '../containers/HomepageContainer';
import AboutPageContainer from '../containers/AboutPageContainer';
import MenuPageContainer from '../containers/MenuPageContainer';
import ContactPageContainer from '../containers/ContactPageContainer';
import ServicesPageContainer from '../containers/ServicesPageContainer';
import MenuBrunch from '../components/MenuBrunch';
import MenuLunch from '../components/MenuLunch';
import MenuDinner from '../components/MenuDinner';
import MenuHappyHour from '../components/MenuHappyHour';
import MenuDessert from '../components/MenuDessert';
import MenuCocktails from '../components/MenuCocktails';

export default (
  <Switch>
    <Route exact path='/' component={ HomepageContainer }/>
    <Route path='/about' component={ AboutPageContainer }/>
    <Route path='/menu' component={ MenuPageContainer }/>
    <Route path='/contact' component={ ContactPageContainer }/>
    <Route path='/services' component={ ServicesPageContainer }/>
    <Route path='/brunch' component={ MenuBrunch } />
    <Route path='/lunch' component={ MenuLunch } />
    <Route path='/dinner' component={ MenuDinner } />
    <Route path='/happy-hour' component={ MenuHappyHour } />
    <Route path='/dessert' component={ MenuDessert } />
    <Route path='/cocktails' component={ MenuCocktails } />
  </Switch>
)