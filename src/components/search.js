import React from 'react';
import PropTypes from 'prop-types';

const Search = ({getValue}) => (
    <div className='search'>
        <label>
          <span>Information about film</span>
          <input
            type='search'
            placeholder='Name of film...'
            onClick={getValue}
          />
        </label>
    </div>
)

Search.propTypes = {
    getValue: PropTypes.func.isRequired
}

export default Search