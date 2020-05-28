import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

export const Card = styled.div`
    border: 0.5px dotted #5d0606;
    border-radius: 10px;
    margin: 10px;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 9px 6px -6px black;
    background-color: whitesmoke;
    text-transform: capitalize;
`

const Title = styled.h5`
      font-family: 'Roboto', sans-serif;
`

export function CardName(props) {
  return <Title className="card-name">{props.name}</Title>;
}

export function CardImg(props) {

  const [img, setImg] = useState({});

  useEffect(() => {
    axios.get(props.url)
      .then(({ data }) => setImg(data.sprites), [])
      .catch(err =>
        console.log(err)
      )
  }, [props.url]);

  return <img src={img.front_default} alt={props.alt} />;
}
