import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({ handleSearch, handleClassicCheck, handlePhCheck, handleAbvCheck}) => {

    const handleFilter = (event) => {
       
        switch (event.target.id) {
            case "classic":
                handleClassicCheck(event);
                break;

            case "ph":
                handlePhCheck(event);
                break;
            
            case "abv":
            handleAbvCheck(event);
            break;
        
            default:
                break;
        }
    }
    
    return (
        <div className="filter-list__container">Filter By:
            <FilterItem type="Classic Range: " handleFilter={handleFilter} id="classic"/>
            <FilterItem type="High Acidity: " handleFilter={handleFilter} id="ph"/>
            <FilterItem type="High ABV: " handleFilter={handleFilter} id="abv"/>

            <label name="Search">Search: </label>
            <input className="search-input" onChange={handleSearch} name="Search"></input>
        </div>
    )

};

export default FiltersList;