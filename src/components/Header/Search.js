import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = ({ onSearchClick }) => {
    return (
        <div className='search menu-item'>
            <FontAwesomeIcon onClick={onSearchClick} icon={faSearch} />
        </div>
    );
};

export default Search;
