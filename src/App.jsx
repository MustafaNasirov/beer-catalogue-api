import { useEffect, useState } from 'react';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';
//import beers from "./assets/data/beers";
import "./App.scss"
import Bubbles from './components/Bubbles/Bubbles';

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [classicRange, setClassicRange] = useState();
  const [ph, setPh] = useState("");
  const [abv, setAbv] = useState();

  
  
  const getBeers = async () => {
    let params=`${search}&${abv}&${classicRange}`
    
    try{
      const response = await fetch(`https://api.punkapi.com/v2/beers?${params}`);
      
      const data = await response.json();

      if(ph === true) setBeers(data.filter(beer => beer.ph < 4))

      setBeers(data);
      console.log(search)
    }
    catch(error){
      alert(error.message);
    }
  }

  useEffect(() => { getBeers(); }, [search, classicRange, ph, abv]);


  const handleSearch = (event) => {
    if (event.target.value !== "") setSearch(`beer_name=${event.target.value}`);
    else setSearch("");
  }

  const handleClassicCheck = (event) => {
    if(event.target.checked === true){
      setClassicRange("brewed_before=01/2010");
      return;
    }
    
    setClassicRange("");
  }

  const handlePhCheck = (event) => {
    if(event.target.checked === true){
      setPh(true);
      return;
    }

    setPh(false);
  }

  const handleAbvCheck = (event) => {
    if(event.target.checked === true){
      setAbv("abv_gt=6");
      return;
    }

    setAbv("");
  }


  return (
    <div className='app'>
      <Bubbles/>
      <Header/>
      <NavBar handleClassicCheck={handleClassicCheck} handlePhCheck={handlePhCheck} handleAbvCheck={handleAbvCheck} handleSearch={handleSearch}/>
      {beers && <Main className="main" arr={beers} /> } 
     
    </div>
  );
}

export default App;