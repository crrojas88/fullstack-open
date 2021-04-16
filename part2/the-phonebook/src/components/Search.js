import React from 'react';

const Search = ({ placeholder, searchField, handleChange }) => {
    return(
        <div>
        Search: <input placeholder={placeholder} name='searchField' value={searchField} onChange={handleChange}/>
        </div>
    )
}

export default Search