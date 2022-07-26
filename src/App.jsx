import { useEffect, useState } from 'react';
import Main from './containers/Main/Main';

function App() {
  const [beers, setBeers] = useState(false);
  
  const getBeers = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers/?");
    const data = await response.json();

    setBeers(data);
  }
  useEffect(() => { getBeers(); }, []);


  return (
    <>
      {beers && <Main className="main" arr={beers} /> }
    </>
  );
}

export default App;