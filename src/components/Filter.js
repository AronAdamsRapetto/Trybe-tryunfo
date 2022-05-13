import React from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      filterName,
      filterRarity,
      filterSuper,
      onHandleChange,
    } = this.props;
    return (
      <aside className="filters-container">
        <h4>Filtros de Busca</h4>
        <input
          className="input-nameFilter"
          type="text"
          data-testid="name-filter"
          placeholder="Nome da carta"
          name="filterName"
          value={ filterName }
          onChange={ onHandleChange }
          disabled={ filterSuper }
        />
        <select
          data-testid="rare-filter"
          name="filterRarity"
          value={ filterRarity }
          onChange={ onHandleChange }
          disabled={ filterSuper }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label className="trunfo-filter" htmlFor="trunfo-filter">
          <input
            id="trunfo-filter"
            data-testid="trunfo-filter"
            type="checkbox"
            name="filterSuper"
            checked={ filterSuper }
            onChange={ onHandleChange }
          />
          Super Trunfo
        </label>
        <button className="button-search" type="button">Buscar</button>
      </aside>
    );
  }
}

// filter : {
//   filterName: '',
//   filterRarity: '',
//   filterSuper: false,
// }

Filter.propTypes = {
  filterName: PropTypes.string,
  filterRarity: PropTypes.string,
  filterSuper: PropTypes.bool,
  onHandleChange: PropTypes.func,
};

Filter.defaultProps = {
  filterName: '',
  filterRarity: '',
  filterSuper: false,
  onHandleChange: PropTypes.func,
};

export default Filter;
