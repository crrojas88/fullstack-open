import React from 'react';
import CountryCard from './Country-card';

const CountryList = ({ countries }) => {
    if(countries.length > 10 ) {
        return(
            <div>
                <span>Too many matches. Please specify</span>
            </div>
        )
    } else if(countries.length > 1 && countries.length < 10) {
        return(
            <div>
                <ul>
                    {countries.slice(0, 10).map(country => <li key={country.numericCode}>{country.name}</li>)}
                </ul>
            </div>
        )
    } else if(countries.length === 1) {
        return(
            <div>
                {countries.map(country => <CountryCard key={country.numericCode} name={country.name} capital={country.capital} pop={country.population} flag={country.flag} languages={country.languages} />)}
            </div>
        )
    } else {
        return(
            <></>
        )
    }
}

export default CountryList