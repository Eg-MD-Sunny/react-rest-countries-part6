import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,region,area} = props.country
    return (
        <div className='country'>
           <h2>Name: {name.common}</h2>
           <p>Area: {area}</p>
           <p><small>Region: {region}</small></p>
           <p>Population: {population}</p>   
        </div>
    );
};

export default Country;