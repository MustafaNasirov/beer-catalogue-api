import "./CardList.scss";
import Card from "../Card/Card";
//import { useState } from "react";

const CardList = ({arr}) => {

    const beers = arr.map((beer) => {
        return(
                <div className="card-item">
                    <Card 
                        key={beer.id} 
                        name={beer.name} 
                        tagline={beer.tagline} 
                        desc={beer.description} 
                        img={beer.image_url} alt="beer"
                        abv={beer.abv}
                        ph={beer.ph}
                        ibu={beer.ibu}
                        brewDate={beer.first_brewed}
                        />
                </div>
        )
    })

    return <div className="card-container">{beers}</div>

}

export default CardList;