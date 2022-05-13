import React from 'react';
import './Filter.css';

class Filter extends React.Component {
  render() {
    return (
      <aside className="filters-container">
        <h4>Filtros de Busca</h4>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Nome da carta"
        />
        <select data-testid="rare-filter">
          <option value="">Raridade</option>
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label className="trunfo-filter" htmlFor="trunfo-filter">
          <input id="trunfo-filter" type="checkbox" />
          Super Trunfo
        </label>
        <button className="button-search" type="button">Buscar</button>
      </aside>
    );
  }
}

export default Filter;
