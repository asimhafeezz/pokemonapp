import React, { useEffect , useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { getPokemon } from './store/pokemonData/action';
import SearchBar from './components/searchBar';
import PokeCard from './components/pokeCard';
import { useDispatch } from 'react-redux';

function App() {
  
  const [value, setValue] = useState<string>("")

  
    
    

  return (
    <div className="App">
      <h3>Search a Pokemon</h3>
      <SearchBar value={value} setValue={setValue} />
      <PokeCard />
    </div>
  );
}

export default App;
