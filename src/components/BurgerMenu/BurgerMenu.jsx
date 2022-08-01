import filterListImg from "../../assets/images/filter-list.png"
import NavBar from "../../containers/NavBar/NavBar"
import FiltersList from "../FiltersList/FiltersList"

import "./BurgerMenu.scss"

const BurgerMenu = ( {handleSearch, handleClassicCheck, handlePhCheck, handleAbvCheck, toggleFilters, showFilters}) => {
    return(
        <div className="burger-container">
            <img src={filterListImg} className="burger-button" alt="filter button" onClick={toggleFilters}/>
            
            {showFilters && 
            (
                <div className="burger__filters">
                <FiltersList 
                    handleSearch={handleSearch}
                    handleClassicCheck={handleClassicCheck} 
                    handlePhCheck={handlePhCheck} 
                    handleAbvCheck={handleAbvCheck} 
                />
                </div>
            )}
            
            
        </div>
    )
}

export default BurgerMenu;