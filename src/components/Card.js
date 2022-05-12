import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <p data-testid="name-card">{ cardName }</p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p className="description" data-testid="description-card">{ cardDescription }</p>
        <div className="atributos">
          <spam data-testid="attr1-card">
            Atributo 1.................................................
            { cardAttr1 }
          </spam>
          <spam data-testid="attr2-card">
            Atributo 2.................................................
            { cardAttr2 }
          </spam>
          <spam data-testid="attr3-card">
            Atributo 3.................................................
            { cardAttr3 }
          </spam>
        </div>
        <p className="raridade" data-testid="rare-card">{ cardRare }</p>
        {
          cardTrunfo && <p className="tryunfo" data-testid="trunfo-card">Super Trunfo</p>
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: 'Card Name',
  cardDescription: 'Description card',
  cardAttr1: 'Atribute card 1',
  cardAttr2: 'Atribute card 2',
  cardAttr3: 'Atribute card 3',
  cardImage: 'src Card image',
  cardRare: 'Rarity card',
  cardTrunfo: false,
};

export default Card;
