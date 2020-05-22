import React from 'react';
import styled from 'styled-components';

export default function  SearchBar({pokemon = "", ...props}) {

  return (
    <>
    <input type="text" placeholder="Nome do pokemon" value={ props.pokemon} onChange={ props.searchInputValue }/> 
    <button type="submit" onClick = {props.searchPokemon}> Pokebola, vai! </button>
    </>
  )
}