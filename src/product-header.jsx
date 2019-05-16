import React from 'react';

function ProductHeader() {
  return (
    <div className="product-header">
      <p className="arrow-back-wrapper">
        <i className="material-icons arrow-back">arrow_back</i>
        <span className="arrow-back--text">All Products</span>
        <h1 className="product-name">Audio-Techina ATH-MSR7</h1>
        <h6 className="product-name--desc">
          2017 Best Headphones of the Year Award Winner
        </h6>
      </p>
    </div>
  );
}

export default ProductHeader;
