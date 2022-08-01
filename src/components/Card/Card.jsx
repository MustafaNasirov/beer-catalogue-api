import "./Card.scss";

const Card = ({id, name, tagline, desc, img, abv, ph, ibu, brewDate}) => {

        let shortenDesc = desc.split(". ")[0] || "";
    return (
    <>
            <div key={id} className="beer-card">
                <p className="beer__name">{name}</p>
                <img className="beer__image" src={img} alt="beer" />
                <p className="beer__tagline">{tagline}</p>
                <p className="beer__abv">ABV: {abv}%</p>
             
                <div className="beer__more-info">
                        <p className="beer__desc">{shortenDesc}</p> 
                        <p className="beer__brew-date">First Brewed in: {brewDate}</p>
                        <p className="beer__ph">PH: {ph}</p>
                        <p className="beer__ibu">IBU: {ibu}</p>
                </div>
            </div> 
    </>
    )
}

export default Card;