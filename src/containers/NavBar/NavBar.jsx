import FiltersList from "../../components/FiltersList/FiltersList";
import "./NavBar.scss"

import filterListImg from "../../assets/images/filter-list.png"

const NavBar = ({ handleSearch, handleClassicCheck, handlePhCheck, handleAbvCheck }) => {

    return(
        <div className="navbar-container">
            <button className="navbar-hamburger">
            <img src={filterListImg} className="navbar-hamburger__img" alt="filter button"></img>
            <div className="navbar__filters">
                <FiltersList 
                    handleSearch={handleSearch}
                    handleClassicCheck={handleClassicCheck} 
                    handlePhCheck={handlePhCheck} 
                    handleAbvCheck={handleAbvCheck} 
                />
            </div>
            </button>
        </div>
    )
};

export default NavBar; 
