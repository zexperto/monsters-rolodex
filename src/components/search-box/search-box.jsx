import React from 'react';
import './search-box.style.css'

export const SearchBox = ({placeHolder,handleChange}) =>
 (
    <input type="search" className="search" placeholder={placeHolder} onChange={handleChange} />
)
