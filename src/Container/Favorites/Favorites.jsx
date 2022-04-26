import ThemeContext from '../../context/ThemeContext';
import Navbar from '../../components/Navbar/Navbar';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

import './Favorites.css';
import { useCharacters } from '../../Hooks/useCharacters';

const Favorites = () => {
    const { darkMode,favorites,isFavorite, addFavorite, removeFavorite, handleClick } = useCharacters();

    let appClass = `App ${ darkMode ? "bg-dark" : "" }`;

    return (
        <ThemeContext.Provider value={{darkMode, handleClick}}>
            <div className={appClass}>
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
            </div>
        </ThemeContext.Provider>
        
    );
};

export default Favorites;
