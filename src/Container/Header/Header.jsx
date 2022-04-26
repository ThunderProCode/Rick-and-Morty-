import SearchBar from '../../components/SearchBar/SearchBar';
import './Header.css';

import PagesSwitch from '../../components/PagesSwitch/PagesSwitch';

const Header = () => {

    return (
        <div className="header-container">
            <SearchBar/>
            <PagesSwitch/>
        </div>
    );
};

export default Header;