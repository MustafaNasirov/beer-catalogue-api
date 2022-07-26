import CardList from "../../components/CardList/CardList"
import Nav from "../Nav/Nav";


const Main = ({arr}) => {
   
    return(
        <>
            <Nav/>
            <CardList className="card-container" arr={arr}/>
        </>
    )

}

export default Main;