import React from 'react';

class CheckoutOptions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Add To Cart',
    };
  }
  onClickLoading = () => {
    this.setState(
      {
        text: 'loading',
      },
      () => {
        setTimeout(() => {
          alert('Item Added To Cart');
          this.setState({
            text: 'Add To Cart',
          });
        }, 2000);
      },
    );
  };
  render() {
    return (
      <div className="checkout-options">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onClickLoading}
        >
          {this.state.text}
        </button>
      </div>
    );
  }
}

export default CheckoutOptions;
