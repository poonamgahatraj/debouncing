import React from 'react'
import { useState,useEffect } from 'react'
export default function Withdebouncing() {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    useEffect(() => {
        const timer = setTimeout(() => {
          setDebouncedTerm(searchTerm);
        }, 1000); // 500ms delay
    
        // Cleanup the timer if searchTerm changes within 500ms
        return () => clearTimeout(timer);
      }, [searchTerm]);
    
      useEffect(() => {
        if (debouncedTerm) {
          performSearch(debouncedTerm);
        }
      }, [debouncedTerm]);

   function handleInputChange(e){
setSearchTerm(e.target.value)

    }
    const performSearch = (query) => {
        console.log('Searching for:', query);
        // API call here
      };
  return (
   <input type="text" onChange={handleInputChange} />
  )
}
