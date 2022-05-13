import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescri: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  }

  setTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
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
      console.log('soma total superior a 210');
      this.setState({ isSaveButtonDisabled: true });
    }
    if (attr1 < 0 || attr2 < 0 || attr3 < 0) {
      console.log('um valor menor que 0');
      this.setState({ isSaveButtonDisabled: true });
    }
    if (attr1 > max || attr2 > max || attr3 > max) {
      console.log('algum numero maior que 90');
      this.setState({ isSaveButtonDisabled: true });
    }
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
        .filter(({ cardDescri }) => cardDescri !== deleteCard.cardDescri),
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
    } = this.state;
    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <section className="container-formPreview">
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
        </section>
        <section>
          {
            savedCards.map((card, index) => (
              <div key={ card.cardName }>
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
    );
  }
}

export default App;
