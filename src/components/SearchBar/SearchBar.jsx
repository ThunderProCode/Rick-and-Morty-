import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import ThemeContext from '../../context/ThemeContext';
import './SearchBar.css';

const SearchBar = () => {

    const {darkMode, setSearchValue, searchCharacter } = useContext(ThemeContext);
    let searchbarClass = `searchbar ${darkMode ? "searchbar-dark" : ""}`;


    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
        searchCharacter();
    }

    return (
        <div className={searchbarClass}>
            <input 
                type="text" 
                placeholder="Search a character"
                onChange={ onSearchValueChange }
            />
            <button ><FaSearch/></button>
        </div>
    );
};

export default SearchBar;