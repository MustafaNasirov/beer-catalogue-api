import FiltersList from "../../components/FiltersList/FiltersList";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu"
import "./NavBar.scss"

import filterListImg from "../../assets/images/filter-list.png"
import { useState } from "react";

const NavBar = ({ handleSearch, handleClassicCheck, handlePhCheck, handleAbvCheck }) => {

    const [showFilters, setShowFilters] = useState(false);
    const toggleFilters = () => {
        setShowFilters(!showFilters);
        console.log("pressed" + showFilters)
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
