import React from 'react';
import PropTypes from 'prop-types';
import SelectImageOptions from './select-menu-options.jsx';
import ProductTabs from './product-tabs.jsx';

function PriceDetails() {
  return (
    <div className="price-details">
      <span className="offer-price">
        <i className="fa fa-dollar" />
        59.99
      </span>
      <span className="actual-price">
        <i className="fa fa-dollar" />
        89.99
      </span>
    </div>
  );
}

function ProductDescription(props) {
  return (
    <div className="product-description">
      <ProductTabs />
      <PriceDetails />
      <SelectImageOptions setImage={props.setImage} />
    </div>
  );
}

ProductDescription.propTypes = {
  setImage: PropTypes.func,
};

export default ProductDescription;
