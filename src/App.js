import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Container from "./Container";
import Header from "./Header";
import SearchBar from "./SearchBar";
import {Card, CardName, CardImg} from "./Card";

function App() {
  
  
  
  const [list, setList] = useState ([]); 
  // list = array de objetos => [{name: bulbassaur, url:https://pokeapi.co/api/v2/pokemon/1/},{}...] 
  // => get na list[i].url retorna um objeto e as imagens estão na key .sprites => {...... sprites: {...front_default:  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"}}

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
      setList(response.data.results);
    })
    .catch(err => {
      console.log(err)
    })
  });


  return (
    <Container>
      <Header title="Pokedéx"/>
      <SearchBar />
      <div>
      {list.map((pokemon, index) => {
        return (
          <Card key={index}>
            <CardName name={pokemon.name}/>   
            <CardImg url={pokemon.url} alt={pokemon.name}/>  
          </Card>    
        );
      })}
      </div>
        

    </Container>
  )

}


export default App;