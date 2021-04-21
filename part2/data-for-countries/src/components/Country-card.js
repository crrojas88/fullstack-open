import React from "react";

const CountryCard = ({ name, capital, pop, flag, languages }) => {
    return(
        <div>
            <h2>{name}</h2>
            <p>
                <strong>Capital: </strong>
                {capital}
                <br />
                <strong>Population: </strong>
                {pop}
            </p>
            <h2>Languages</h2>
            <ul>
                {languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <br />
            <img src={flag} alt={`${name}'s flag`} width="200" height="300"/>
        </div>
    )
}

export default CountryCard