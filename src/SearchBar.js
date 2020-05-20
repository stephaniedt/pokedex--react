import React,{ useState }  from 'react';
import axios from 'axios';

export default function  SearchBar() {

  const [pokemon, setPokemon] = useState('');

  function SearchPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemon }`)
    .then(response => {
      let searchResult = response.data 
      console.log(searchResult);
  })
  }
  return (
    <>
    <input placeholder="Nome do pokemon" value={ pokemon } onChange = {e => setPokemon(e.target.value)}/> 
    <button type="submit" onClick = {SearchPokemon}> Pokebola, vai! </button>
    </>
  )
}