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
  }

  // handleMaxAtribute = ({ target }) => {
  //   const max = 90;
  //   if (parseInt(target.value, 10) > max) {
  //     target.value = '90';
  //   }

  // };

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

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }), this.enableButton);
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
    } = this.state;
    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <section className="container-formPreview">
          <Form
            onInputChange={ this.onInputChange }
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
      </div>
    );
  }
}

export default App;
