import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label className="super" htmlFor="input-superTrunfo">
        <input
          type="checkbox"
          id="input-superTrunfo"
          name="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trunfo
      </label>
    );
  }
}

Checkbox.propTypes = {
  cardTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func,
};

Checkbox.defaultProps = {
  cardTrunfo: false,
  onInputChange: PropTypes.func,
};

export default Checkbox;
