import React, { useContext, useState } from 'react';
import './CharacterCard.css';

//Icons 
import { FaGenderless } from 'react-icons/fa';
import { VscWorkspaceUnknown } from 'react-icons/vsc';
import { BsGenderMale, BsGenderFemale, BsCircleFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

//Custom Imports 
import ThemeContext from '../../context/ThemeContext';

const CharacterCard = (props) => {

    const { darkMode } = useContext(ThemeContext);
    const character = props.character;
    const [ favorite, setFavorite ] = useState(props.isFavorite);

    const characterStatus = (status) => {
        
        if(status === 'Alive'){
            return <BsCircleFill  className="status-icon status-alive"/>
        }else if (status === 'Dead'){
            return <BsCircleFill className="status-icon status-dead"/>
        }else {
            return <VscWorkspaceUnknown/>
        }
    }

    const characterGender = (gender) => {
        if(gender === 'Female'){
            return <BsGenderFemale/>
        }else if(gender === 'Male'){
            return <BsGenderMale/>
        }else if(gender === 'Genderless'){
            return <FaGenderless/>
        }else {
            return <VscWorkspaceUnknown/>
        }
    }

    let cardClass = `character-card ${ darkMode ? "card-dark" : ""}`;
    let cardInfoClass = `character-card-info ${ darkMode ? "info-dark" : "" }`;
    let favIconClass = `favorite-icon ${ favorite ? "favorite-added-icon" : "" }`;;

    const handleClick = () => {
        setFavorite(!favorite);
        if(favorite){
            props.removeFavorite();
        }else {
            props.addFavorite();
        }
    }

    return (   
        <div className={cardClass}>
            <div className={ favIconClass }>
                <AiFillHeart onClick={handleClick}/>
            </div>
            <img src={character.image} alt="character img" />
            <h2>{character.name}</h2>
            <div className={cardInfoClass}>
                <div className="character-card-info-icon">
                    <p>Status</p>
                    {characterStatus(character.status)}
                </div>
                <div className="character-card-divider"/>
                <div className="character-card-info-icon">
                    <p>Gender</p>
                    {characterGender(character.gender)}
                </div>
            </div>
        </div>
    )
};

export default CharacterCard;