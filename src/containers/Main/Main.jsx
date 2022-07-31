import CardList from "../../components/CardList/CardList"
import "./Main.scss"

const Main = ({arr}) => {
   
    return(
        <>
            <CardList className="card-container" arr={arr}/>
        </>
    )

}

export default Main;