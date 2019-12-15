import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({type, placeholder, handleChange}) => (
    <input 
        className= 'search'
        type={type} 
        placeholder={placeholder}
        onChange={handleChange}
    />
);