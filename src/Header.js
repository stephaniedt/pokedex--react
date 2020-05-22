import React from 'react';
import styled from "styled-components";
  
  const Wrapper = styled.div `
  
    height: 50px;
    background-color: black;
    color: white;
    font-size: 25px;
    padding-left: 90px;
    font-weight: 900;
    margin-bottom: 30px; 
    padding-top: 10px;
  `

export default function Header(props) {
  return <Wrapper> <span> {props.title}  </span></Wrapper> ;
}

