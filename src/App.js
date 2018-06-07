import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import MyRoutes from './config/routes';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      { MyRoutes }
      <Footer />
      </div>
    );
  }
}

export default App; 