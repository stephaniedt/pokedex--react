import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      display: flex;
`;
const Input = styled.input`
      margin-right: 10px;
      padding: 0.5rem;
      border-radius: 5px;
`;
const Button = styled.button`
      margin-right: 10px;
      background-color: #c51515;
      border: 1px solid #5d0606;
      font-weight: 600;
      border-radius: 5px;
`;




export default function  SearchBar(props) {

  return (
    <Wrapper>
    <Input type="text" placeholder="Nome do pokemon" value={ props.pokemon} onChange={ props.searchInputValue }/> 
    <Button type="submit" onClick = {props.searchPokemon}> Pokebola, vai! </Button>
    </Wrapper>
  )
}