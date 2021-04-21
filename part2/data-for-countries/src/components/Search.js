import React from "react";

const Search = ({ placeholder, handleChange }) => {
    return(
        <div>
            Search: <input name='searchField' placeholder={placeholder} onChange={handleChange}/>
        </div>
    )
}

export default Search