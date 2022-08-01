import "./Bubbles.scss"
import beerFoam from "../../assets/images/white-foam-crop.png"

const Bubbles = () => {
return(
    <div className='bubbles-container'>
       <div className="title-container">
                <h1 className="navbar__title">PUNK API</h1>
        </div>
    
        <div className="beer-top">
            <img className="beer-foam" src={beerFoam} alt="beer foam"></img> 
        </div>
        <div className="beer-bottom">
            <div className='bubble' id='bubble1'></div>
            <div className='bubble' id='bubble2'></div>
            <div className='bubble' id='bubble3'></div>
            <div className='bubble' id='bubble4'></div>
            <div className='bubble' id='bubble5'></div>
            <div className='bubble' id='bubble6'></div>
            <div className='bubble' id='bubble7'></div>
            <div className='bubble' id='bubble8'></div>
        </div>
  </div>
)

}

export default Bubbles;