import FiltersList from "../../components/FiltersList/FiltersList";
import "./NavBar.scss"
import navImg from "../../assets/images/white-foam-crop.png"

const NavBar = ({ handleSearch, handleClassicCheck, handlePhCheck, handleAbvCheck }) => {

    return(
        <div className="navbar-container">
            <div className="navbar-header">
                <h1 className="navbar__title">Punk API</h1>
                <img className="navbar__img" src={navImg} alt="beer foam"></img> 
            </div>

            <button className="navbar-hamburger">
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
