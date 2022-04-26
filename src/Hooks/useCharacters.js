import { useState, useEffect } from "react";

function useCharacters () {

    const [ characters, setCharacters ] = useState( [] );  
    const [ favorites, setFavorites ] = useState([]);    
    const [ next, setNext ] = useState("");
    const [ prev, setPrev ] = useState("");
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(0);

    const fetchCharacters = async (url) => {
        const response = await fetch(url);
        if(!response.ok){
            const message = `An error has ocurred: ${response.status}` ;
            throw new Error(message);
        }
        const data = await response.json();
        setCharacters(data.results);
        setNext(data.info.next);
        setPrev(data.info.prev);
        setTotalPages(data.info.pages);
    }

    useEffect( () => {
        const  item =  localStorage.getItem("FAVORITE_CHARACTERS_V1");
        if(item){
            setFavorites(JSON.parse( localStorage.getItem("FAVORITE_CHARACTERS_V1")));
        }
        fetchCharacters('https://rickandmortyapi.com/api/character');
    },[]);
    
    const goToNextPage = () => {
        setCurrentPage( currentPage + 1 );
        fetchCharacters(next);
    }

    const goToPrevPage = () => {
        if(prev === null){
            console.log('No more pages');
        }else {
            setCurrentPage( currentPage - 1 );
            fetchCharacters(prev);
        }
    }

    const saveFavorites = () => {
        localStorage.setItem("FAVORITE_CHARACTERS_V1", JSON.stringify(favorites));
    }

    const addFavorite = (favorite) => {

        let tempFavorites = favorites;
        tempFavorites.push(favorite);
        
        setFavorites(tempFavorites);
        

        saveFavorites();
    }

    const removeFavorite = (id) => {
        const favoriteIndex = favorites.findIndex( favorite => favorite.id === id );
        let tempFavorites = favorites;
        tempFavorites.splice(favoriteIndex, 1);
        console.log(tempFavorites);
        setFavorites(tempFavorites);
        saveFavorites();
    } 

    const isFavorite = (characterName) => {

        let characterIsFavorite = false;
        if(favorites.length > 0){
            favorites.forEach( favorite => {
                if(favorite.name === characterName){
                    characterIsFavorite = true;
                }
            })
        }

        return characterIsFavorite;
    }

    return ({
        characters,
        isFavorite,
        favorites,
        addFavorite,
        removeFavorite,
        next,
        goToNextPage,
        goToPrevPage,
        currentPage,
        totalPages
    });

}

export { useCharacters };