import React, {useState, useEffect} from "react";
import axios from 'axios';

export function Card(props) {
  return <div className="card"> {props.children} </div> ;
}
export function CardName(props) {
  return <h5 className="card-name">{props.name}</h5>;
}

export function CardImg(props) {
  const [img, setImg] = useState({});

  useEffect(() => {
    axios.get(props.url)
    .then(response => {
      setImg(response.data.sprites);
    })
    .catch(err => {
      console.log(err)
    })
  });

return <img src={img.front_default} alt={props.alt} />;
}