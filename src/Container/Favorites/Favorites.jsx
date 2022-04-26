import ThemeContext from '../../context/ThemeContext';
import Navbar from '../../components/Navbar/Navbar';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

import './Favorites.css';
import { useCharacters } from '../../Hooks/useCharacters';

const Favorites = () => {
    const { darkMode,favorites,isFavorite, addFavorite, removeFavorite, handleClick } = useCharacters();

    return (
        <ThemeContext.Provider value={{darkMode, handleClick}}>
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
        </ThemeContext.Provider>
        
    );
};

export default Favorites;
