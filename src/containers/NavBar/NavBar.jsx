import BurgerMenu from "../../components/BurgerMenu/BurgerMenu"
import "./NavBar.scss"

import { useState } from "react";

const NavBar = ({ handleSearch, handleClassicCheck, handlePhCheck, handleAbvCheck }) => {

    const [showFilters, setShowFilters] = useState(false);
    const toggleFilters = () => {
        setShowFilters(!showFilters);
    }

    return(
        <div className="navbar-container">

            <BurgerMenu handleSearch={handleSearch}
                handleClassicCheck={handleClassicCheck} 
                handlePhCheck={handlePhCheck} 
                handleAbvCheck={handleAbvCheck} 
                toggleFilters={toggleFilters}
                showFilters={showFilters}
                />
        </div>
    )
};

export default NavBar; 
