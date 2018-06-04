import React, {Component} from 'react';
import AboutIntro from '../components/AboutIntro';
import AboutImages from '../components/AboutImages';
import '../components/AboutIntro.css';
import '../components/AboutImages.css';



class AboutPageContainer extends Component {
  render() {
    return (
      <div>
      <AboutIntro />
      <AboutImages />
      </div>
    );
  }
}

export default AboutPageContainer