import React from 'react';
import PropTypes from 'prop-types';

function ProductImageWrapper(props) {
  return (
    <div className="product-image--wrapper">
      <img alt="product" className="product-image" src={props.imageUrl} />
    </div>
  );
}

ProductImageWrapper.propTypes = {
  imageUrl: PropTypes.string,
};

export default ProductImageWrapper;
