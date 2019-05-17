/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

class SelectImageOptions extends React.PureComponent {
  handleChange = e => {
    if (e.target.value !== 'select') {
      this.props.setImage(e.target.value);
    }
  };
  render() {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div className="select-image--options">
        <label className="select-color--input">Colors</label>
        <select className="form-control" onChange={this.handleChange}>
          <option value="/assets/images/ath-msr7-black.jpg">Black</option>
          <option value="/assets/images/ath-msr7-brown.jpg">Brown</option>
        </select>
      </div>
    );
  }
}

SelectImageOptions.propTypes = {
  setImage: PropTypes.func,
};

export default SelectImageOptions;
