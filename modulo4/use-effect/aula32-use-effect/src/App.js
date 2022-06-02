import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DivPai } from './styled'
import PokeCard from './components/PokeCard/PokeCard'

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch((err) => {
        alert("Houve alguem erro, tenta novamente")
      });
  }, []);


  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }

  return (
    < DivPai>
      <select onChange={changePokeName}>
        <option value="">NENHUM</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name.toUpperCase()}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </ DivPai>
  );
}

export default App;
