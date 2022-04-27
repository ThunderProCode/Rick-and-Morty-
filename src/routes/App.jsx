import ThemeContext from '../context/ThemeContext';
import './App.css';
import { useCharacters } from '../Hooks/useCharacters';
import Navbar from '../components/Navbar/Navbar';
import Header from '../Container/Header/Header';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import PagesSwitch from '../components/PagesSwitch/PagesSwitch';

const App = () => {

  const { 
    characters,
    isFavorite,
    favorites,
    addFavorite,
    removeFavorite,
    next,
    goToNextPage,
    goToPrevPage,
    currentPage,
    totalPages,
    darkMode,
    handleClick,
    setSearchValue,
    searchValue,
    searchCharacter
  } = useCharacters();

  const values = {
      darkMode, 
      handleClick, 
      characters, 
      isFavorite, 
      favorites, 
      addFavorite, 
      removeFavorite, 
      next, 
      goToNextPage,
      goToPrevPage,
      currentPage,
      totalPages,
      setSearchValue,
      searchValue,
      searchCharacter
  }

  let appClass = `App ${ darkMode ? "bg-dark" : "" }`;

  return (

    <ThemeContext.Provider value={values}>    
      <div className={appClass}>
        <Navbar/>
        <Header/>
        <div className="characters-container">
          {
              characters.map( character => (
                  <CharacterCard
                  key={ character.id }
                  character = {character}
                  isFavorite = { isFavorite(character.name) }
                  addFavorite={ () => addFavorite(character) }
                  removeFavorite={ () => removeFavorite(character.id) }
                  />
              ))
          }
          </div>       
          <div className="pages-switch-container">
            <PagesSwitch/>
          </div> 
      </div>
    </ThemeContext.Provider>
  );
};

export default App;