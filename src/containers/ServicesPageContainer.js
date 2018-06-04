import React, {Component} from 'react'
import ServicesCatering from '../components/ServicesCatering';
import ServicesDaily from '../components/ServicesDaily';
import ServicesQuote from '../components/ServicesQuote';
import ServicesImage from '../components/ServicesImage';


class ServicesPageContainer extends Component {
  render() {
    return (
      <div>
      	<ServicesCatering />
      	<ServicesDaily />
      	<ServicesQuote />
      	<ServicesImage />
      </div>
    );
  }
}

export default ServicesPageContainer