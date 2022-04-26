import { useContext } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import ThemeContext from '../../context/ThemeContext';
import './PagesSwitch.css';

const PagesSwitch = () => {

    const { darkMode,goToNextPage, goToPrevPage, currentPage, totalPages } = useContext(ThemeContext);

    let pagesClass = `pages-container ${darkMode ? "pages-switch-dark": ""}`;

    return (
        <div className={pagesClass}>
            <button onClick={ () => goToPrevPage() } ><MdNavigateBefore/></button>
            <p>{currentPage} - {totalPages}</p>
            <button onClick={ () => goToNextPage()} ><MdNavigateNext/></button>
        </div>
    );
};

export default PagesSwitch;