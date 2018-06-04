import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomepageContainer from '../containers/HomepageContainer';
import AboutPageContainer from '../containers/AboutPageContainer';
import MenuPageContainer from '../containers/MenuPageContainer';
import ContactPageContainer from '../containers/ContactPageContainer';
import ServicesPageContainer from '../containers/ServicesPageContainer';

export default (
  <Switch>
    <Route exact path='/' component={ HomepageContainer }/>
    <Route path='/about' component={ AboutPageContainer }/>
    <Route path='/menu' component={ MenuPageContainer }/>
    <Route path='/contact' component={ ContactPageContainer }/>
    <Route path='/services' component={ ServicesPageContainer }/>
  </Switch>
)