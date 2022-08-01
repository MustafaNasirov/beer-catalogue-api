import CardList from "../../components/CardList/CardList"
import "./Main.scss"

const Main = ({arr}) => {
   
    return(
        <div className="container">
            <CardList arr={arr}/>
        </div>
    )

}

export default Main;