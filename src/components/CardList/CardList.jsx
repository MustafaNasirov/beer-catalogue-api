import "./CardList.scss";
import Card from "../Card/Card";
//import { useState } from "react";

const CardList = ({arr}) => {

    const beers = arr.map((beer) => {

        return <>
                    <Card 
                        key={beer.id} 
                        name={beer.name} 
                        tagline={beer.tagline} 
                        desc={beer.description} 
                        img={beer.image_url} alt="beer"
                        />
                </>
    })

    return <div className="card-container">{beers}</div>

}

export default CardList;