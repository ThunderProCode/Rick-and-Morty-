import ThemeContext from '../../context/ThemeContext';
import Navbar from '../../components/Navbar/Navbar';
import React, { useContext } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

import './Favorites.css';
import { useCharacters } from '../../Hooks/useCharacters';

const Favorites = () => {
    const { favorites,isFavorite, addFavorite, removeFavorite } =useCharacters();
    return (
        <>
            <Navbar/>
            <div className="favorite-characters-container">
                {
                    favorites.map( favorite => (
                        <CharacterCard
                            key={ favorite.id }
                            character = {favorite}
                            isFavorite = { isFavorite(favorite.name) }
                            addFavorite={ () => addFavorite(favorite) }
                            removeFavorite={ () => removeFavorite(favorite.id) }
                        />
                    ))
                } 
            </div>
        </>
        
    );
};

export default Favorites;
