import "./FilterItem.scss";


const FilterItem = ({ type, handleFilter}) => {

    return(
        <div className="filter-item">
            <label className="filter-item__label">{type}</label>
            <input type="checkbox" name={type} onChange={handleFilter}/>
        </div>
    )
    
};

export default FilterItem;