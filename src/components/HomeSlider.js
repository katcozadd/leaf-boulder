import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import cookie from '../images/cookie.jpg';
import feast from '../images/feast.jpg';
import noodle from '../images/noodle.jpg';
import cabbage from '../images/cabbage.jpg';
import egg from '../images/egg.jpg';
import gathering from '../images/gathering.jpg';
import radish from '../images/radish.jpg';
import salad from '../images/salad.jpg';
import hummus from '../images/hummus.jpg';
import garden from '../images/garden.jpg';

 
class HomeSlider extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img className="img-responsive" id='cabbage' src={cabbage} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
                <div>
                    <img className="img-responsive" id='cookie' src={cookie} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
                <div>
                    <img className="img-responsive" id='feast' src={feast} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
                <div>
                    <img className="img-responsive" id='noodle' src={noodle} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
                <div>
                    <img className="img-responsive" id='egg' src={egg} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
                <div>
                    <img className="img-responsive" id='gathering' src={gathering} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
                <div>
                    <img className="img-responsive" id='radish' src={radish} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
                <div>
                    <img className="img-responsive" id='salad' src={salad} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
                <div>
                    <img className="img-responsive" id='hummus' src={hummus} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
                <div>
                    <img className="img-responsive" id='garden' src={garden} alt="Leaf Vegetarian Restaurant - Homepage"/>
                </div>
            </Carousel>
    );
  }
}

export default HomeSlider