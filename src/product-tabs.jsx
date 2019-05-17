/* eslint-disable indent */
import React from 'react';

class ProductTabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setDescription = this.setTab('description');
    this.setDetails = this.setTab('details');
    this.state = {
      selectedTab: 'description',
    };
  }
  setTab = name => () => {
    this.setState({
      selectedTab: name,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="tab">
          <button
            type="button"
            className={`tablinks tab-text ${
              this.state.selectedTab === 'description' ? 'highlight' : ''
            }`}
            onClick={this.setDescription}
          >
            Description
          </button>
          <button
            type="button"
            className={`tablinks tab-text ${
              this.state.selectedTab === 'details' ? 'highlight' : ''
            }`}
            onClick={this.setDetails}
          >
            Details
          </button>
        </div>
        <div className="product-desc-tabs--divider" />
        {this.state.selectedTab === 'description' && (
          <div className="tab-description">
            <p className="content">
              The image displayed is indicative in nature. Actual product may
              vary in shape or design as per the availability. Flowers if
              Flowers if blossomed in plant may be delivered in fully bloomed,
              semi-bloomed or bud stage. The chosen delivery time is an estimate
              and depends on the availability of the product and the destination
              to which you want the product to be delivered. This product is
              hand delivered and will not be delivered along with courier As the
              size of the plant, number of leaves and color of flowers depend on
              local availability, so it may vary at time of the delivery.
            </p>
          </div>
        )}
        {this.state.selectedTab === 'details' && (
          <div className="tab-description">
            <p className="content">
              Please take out the plant from the box immediately after receiving
              and water it as required. Water the soil, not the leaves and Keep
              Keep it away from direct sunlight. Avoid placing plants in trouble
              spots, such as near heat or air conditioning ducts.
            </p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ProductTabs;
