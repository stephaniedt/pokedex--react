import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
      display: flex;
`;
const Input = styled.input`
      margin-right: 10px;
      padding: 0.5rem;
      border-radius: 5px;
`;

const Msg = styled.div`
    display: block;
    font-size: 1rem;
    height: 25px;
`;


export default function SearchBar(props) {
    
  return (
    <Form>
      <Input type="text" placeholder="Nome do pokemon" value={props.pokemon} onChange={props.handleInputValue} />
      <Msg>{props.msg}</Msg>
    </Form>
  )
}