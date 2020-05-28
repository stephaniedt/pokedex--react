import React, { useState, useEffect } from 'react';
import axios from "axios";
import Container from "./components/Container";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { Card, CardName, CardImg } from "./components/Card";

function App() {
  
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState('');
  const [msg, setMsg] = useState('')
  
  useEffect(() => { axios.get('https://pokeapi.co/api/v2/pokemon?limit=80').then(({ data }) => setList(data.results))}, []);
  
  
    
    const handleInputValue = ({target}) => {
      setSearch(target.value);
    }
    
    useEffect(() => {
      let filtered = list.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()));
      setFilteredList(filtered);
    }, [list, search]);
    
    let pokemons = []
        filteredList ? pokemons = filteredList : pokemons = list
    
    return (
      <>
      <Header title="Pokédex" />
      <Container noBorder>
        <SearchBar
          handleInputValue={handleInputValue}
          pokemon={search}
          msg={msg}
          />
      </Container>

      <Container>
        {
          pokemons && pokemons.map((pokemon, index) => 
            <Card key={index}>
              <CardName name={pokemon.name} />
              <CardImg url={pokemon.url} alt={pokemon.name} />
            </Card>
          )
        }
      </Container>
    </>
  )

}


export default App;