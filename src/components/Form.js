import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="input-nome">
          Nome:
          <input
            type="text"
            id="input-nome"
          />
        </label>
      </form>
    );
  }
}

export default Form;
