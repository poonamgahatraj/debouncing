import React from 'react'
import { useState } from 'react'

export default function Searchcomponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        performSearch(e.target.value); // Triggers search on every keystroke
      };
    
      const performSearch = (query) => {
        console.log('Searching for:', query);
    
      };
  return (
   <input type="text" onChange={handleInputChange}></input>
  )
}
