import React, {Component} from 'react'
import HomeSlider from '../components/HomeSlider';
import HomepageContinued from '../components/HomepageContinued';


class HomepageContainer extends Component {
  render() {
    return (
      <div>
      	<HomeSlider />
      	<HomepageContinued />
      </div>
    );
  }
}

export default HomepageContainer