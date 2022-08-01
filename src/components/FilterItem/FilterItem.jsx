import "./FilterItem.scss";


const FilterItem = ({ type, handleFilter, id}) => {

    return(
        <div className="filter-item">
            <label className="filter-item__label">{type}</label>
            <input type="checkbox" name={type} onChange={handleFilter} id={id} className="checkbox-box"/>
        </div>
    )
};

export default FilterItem;