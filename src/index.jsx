import React from 'react';
import ReactDOM from 'react-dom';

import ProductHeader from './product-header.jsx';
import ProductDescription from './product-description.jsx';
import ProductImageWrapper from './product-image-wrapper.jsx';
import CheckoutOptions from './checkout-options.jsx';

class App extends React.PureComponent {
  state = {
    image: '/assets/images/ath-msr7-black.jpg',
  };
  setImage = url => {
    this.setState({
      image: url,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="product-details">
          <ProductHeader />
          <ProductDescription setImage={this.setImage} />
          <CheckoutOptions />
        </div>
        <ProductImageWrapper imageUrl={this.state.image} />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
