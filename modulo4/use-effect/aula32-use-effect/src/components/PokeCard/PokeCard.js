import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from './slyled'


const PokeCard = (props) => {
   const [pokemon, setPokemon] = useState("")

   useEffect(() => {
      pegaPokemon(props.pokemon);
   }, [props.pokemon]);

   const pegaPokemon = (nomePokemon) => {
      axios
         .get(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
         .then((res) => {
            setPokemon(res.data);
         })
         .catch((err) => console.log(err.data));
   };

   return (
      <Container>
         <p>{pokemon.name}</p>
         <p>{pokemon.weight} KG</p>
         {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
         {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt="Foto do Pokemon" />
         )}
      </Container>
   )
}

export default PokeCard
