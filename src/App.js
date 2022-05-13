import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';
import Filter from './components/Filter';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescri: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
    filterName: '',
    filterRarity: 'todas',
    filterSuper: false,
  }

  setTrunfo = () => {
    const { cardTrunfo, hasTrunfo } = this.state;
    if (cardTrunfo || hasTrunfo) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  // Idéia de utilizar o spread para adicionar array no estado retirada do pullRequest de @AlencarDiasDaCosta
  handleClick = () => {
    const {
      cardName,
      cardDescri,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    this.setState((estadoAnterior) => ({
      savedCards: [...estadoAnterior.savedCards, {
        cardName,
        cardDescri,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), () => {
      this.setTrunfo();
      this.setState(() => ({
        cardName: '',
        cardDescri: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }));
    });
  }

  enableButton = () => {
    const {
      cardName,
      cardDescri,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    const maxTotal = 210;
    const max = 90;

    if (cardName === '' || cardDescri === '' || cardImage === '' || cardRare === '') {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }

    if (attr1 + attr2 + attr3 > maxTotal) {
      this.setState({ isSaveButtonDisabled: true });
    }
    if (attr1 < 0 || attr2 < 0 || attr3 < 0) {
      this.setState({ isSaveButtonDisabled: true });
    }
    if (attr1 > max || attr2 > max || attr3 > max) {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  resetFilters = () => {
    // filterName: '',
    // filterRarity: 'todas',
    // filterSuper: false,
    const { filterSuper } = this.state;
    if (filterSuper) this.setState({ filterName: '', filterRarity: 'todas' });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }), this.enableButton);
  }

  handleClickDelete = (indexClick) => {
    const { savedCards } = this.state;
    const deleteCard = savedCards
      .find((card, indexCard) => indexClick === indexCard);
    if (deleteCard.cardTrunfo) this.setState({ hasTrunfo: false });
    this.setState((estadoAnterior) => ({
      savedCards: estadoAnterior.savedCards
        .filter((card, index) => index !== indexClick),
    }));
  }

  render() {
    const {
      cardName,
      cardDescri,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
      filterName,
      filterRarity,
      filterSuper,
    } = this.state;
    return (
      <div>
        <section className="container-addCard">
          <div className="container-form">
            <h2>Adicionar nova carta</h2>
            <Form
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.handleClick }
              cardName={ cardName }
              cardDescription={ cardDescri }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
            />
          </div>
          <div className="container-preview">
            <h2>Pré-visualização</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescri }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </section>
        <h2 className="titulo-allCards">Totas as cartas</h2>
        <div className="container-allCards">
          <Filter
            filterName={ filterName }
            filterRarity={ filterRarity }
            filterSuper={ filterSuper }
            onHandleChange={ this.handleChange }
          />
          <section className="card-list">
            {
              savedCards.filter((cardFilter) => {
                if (filterRarity === 'todas' && filterSuper === false) {
                  return true;
                }
                if (cardFilter.cardRare === filterRarity && filterSuper === false) {
                  return true;
                }
                if (cardFilter.cardTrunfo === true && filterSuper === true) return true;
                return false;
              }).filter((cardFilter) => {
                if (cardFilter.cardName.includes(filterName) && filterSuper === false) {
                  return true;
                }
                if (cardFilter.cardTrunfo === true && filterSuper === true) return true;
                return false;
              })
                .map((card, index) => (
                  <div className="card-item" key={ card.cardName }>
                    <Card
                      cardName={ card.cardName }
                      cardDescription={ card.cardDescri }
                      cardAttr1={ card.cardAttr1 }
                      cardAttr2={ card.cardAttr2 }
                      cardAttr3={ card.cardAttr3 }
                      cardImage={ card.cardImage }
                      cardRare={ card.cardRare }
                      cardTrunfo={ card.cardTrunfo }
                    />
                    <button
                      className="delete-button"
                      type="button"
                      onClick={ () => this.handleClickDelete(index) }
                      data-testid="delete-button"
                    >
                      Exluir
                    </button>
                  </div>))
            }
          </section>
        </div>
      </div>
    );
  }
}

export default App;
