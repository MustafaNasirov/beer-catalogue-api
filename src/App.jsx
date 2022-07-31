import { useEffect, useState } from 'react';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';
import beers from "./assets/data/beers";
import "./App.scss"
import Bubbles from './components/Bubbles/Bubbles';

function App() {
  //const [beers, setBeers] = useState(false);
  const [search, setSearch] = useState("");
  const [classicRange, setClassicRange] = useState(false);
  const [ph, setPh] = useState(false);
  const [abv, setAbv] = useState(false);
  
  
  const getBeers = async () => {
    
    try{
      const response = await fetch("https://api.punkapi.com/v2/beers/");
      if(response.sttatus !== 200) throw new Error("Connection failure")
      
      const data = await response.json();

      //setBeers(data);
    }
    catch(error){
      //alert(error.message);
    }
  }

  useEffect(() => { getBeers(); }, [search, classicRange, ph, abv]);


  const handleSearch = (event) => {
    if(!event.target.value !== ""){
      setSearch(`beer_name=${event.target.value}`);
      return;
    }

    setSearch("");
  }

  const handleClassicCheck = (event) => {
    if(event.target.checked === true){
      setClassicRange(true);
      return;
    }

    setClassicRange(false);
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
      setAbv(true);
      return;
    }

    setAbv(false);
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