import "./Card.scss";

const Card = ({id, name, tagline, desc, img}) => {

    return (
    <>
            <div key={id} className="beer-card">
                    <img className="beer__image" src={img} alt="beer" />
                    <p className="beer__name">{name}</p>
                    <p className="beer__tagline">{tagline}</p>
                    <p className="beer__desc">{desc}</p> 
            
            </div> 
    </>
    )
}

export default Card;