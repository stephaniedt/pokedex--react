import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Container from "./Container";
import Header from "./Header";
import SearchBar from "./SearchBar";
import {Card, CardName, CardImg} from "./Card";

function App() {
  
  const [list, setList] = useState ([]); 
  const [search, setSearch] = useState (""); 
  
  useEffect(() => {
      
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        setList(response.data.results);
      })
      .catch(err => {
        console.log(err)
      })

  }, [setList]);

  

  function searchPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(response => {
      setList(response.data.forms)
    })
    .catch(err => {
      console.log(err)
    })
  }


  const searchInputValue = (e) => { 
    setSearch(e.target.value);
  }




  return (
    <>
      <Header title="Pokédex"/>
      <Container noBorder> 
        <SearchBar 
          searchInputValue= { searchInputValue } 
          searchPokemon= { searchPokemon } 
          pokemon={search} 
          />
      </Container>

        <Container>
        {list.map((pokemon, index) => {
          return (
            <Card key={index}>
            <CardName name={pokemon.name}/>   
            <CardImg url={pokemon.url} alt={pokemon.name}/>  
          </Card> 
          );
        })}
      </Container>
    </>
  )

}


export default App;