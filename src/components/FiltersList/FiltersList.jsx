import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = ({ handleInput, handleFilter}) => {

    return (
        <div className="filter-list__container">
            <FilterItem type="Classic Range: " handleFilter={handleFilter}/>
            <FilterItem type="High Acidity: " handleFilter={handleFilter}/>
            <FilterItem type="High ABV: " handleFilter={handleFilter}/>

            <label name="Search">Search: </label>
            <input className="search-input" onChange={handleInput} name="Search"></input>
        </div>
    )

};

export default FiltersList;