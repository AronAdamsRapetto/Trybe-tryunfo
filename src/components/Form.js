import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import Checkbox from './Checkbox';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <label className="name" htmlFor="input-nome">
          Nome:
          <input
            type="text"
            data-testid="name-input"
            id="input-nome"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label className="textArea" htmlFor="input-description">
          Descrição:
          <textarea
            id="input-description"
            name="cardDescri"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label className="atributo" htmlFor="input-attr1">
          Atributo 1:
          <input
            type="number"
            id="input-attr1"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            max="90"
          />
        </label>
        <label className="atributo" htmlFor="input-attr2">
          Atributo 2:
          <input
            type="number"
            id="input-attr2"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            max="90"
          />
        </label>
        <label className="atributo" htmlFor="input-attr3">
          Atributo 3:
          <input
            type="number"
            id="input-attr3"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max="90"
          />
        </label>
        <label className="imagem" htmlFor="input-image">
          Imagem:
          <input
            type="text"
            id="input-image"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label className="raridade" htmlFor="input-rare">
          Raridade:
          <select
            id="input-rare"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {
          hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : <Checkbox cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />
        }
        <button
          className="save-button"
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: 'Card Name',
  cardDescription: 'Description card',
  cardAttr1: 'Atribute card 1',
  cardAttr2: 'Atribute card 2',
  cardAttr3: 'Atribute card 3',
  cardImage: 'src card image',
  cardRare: 'rarity card',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
