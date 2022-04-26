import ThemeContext from '../../context/ThemeContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { useContext, useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const {darkMode, handleClick} = useContext(ThemeContext);
    const [ toggleMenu, setToggleMenu ] = useState(false);

    let navbarClass = `navbar ${ darkMode ? "navbar-dark" :"" }`;
    let itemClass = `${darkMode ? "navbar__links-item dark": "navbar__links-item"}`;    

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        <nav className={navbarClass}>
            <div className="navbar__title">
                <h1>Rick and Morty</h1>
                <label className="switch">
                    <input 
                        type="checkbox"
                        onClick={ handleClick }
                    />
                    <span className="slider round"></span>
                </label>
            </div>
            <ul className="navbar__links">
                <li className={itemClass} >
                    <a href="/favorites">Favorites</a>
                </li>
                <li className={itemClass} >
                    <a href="/">Home</a>
                </li>
            </ul>
            <div className="navbar__smallscreen">
                <GiHamburgerMenu fontSize={27} onClick={handleToggleMenu}  />

                { toggleMenu && (
                    <div className="navbar__smallscreen-overlay slide-bottom">
                        <div className="close-icon-container">
                            <MdOutlineClose fontSize={27}  style={{ color: 'white' }} onClick={handleToggleMenu}/>
                        </div>
                        <ul className="navbar__smallscreen-links" >
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/favorites">Favorites</a>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;