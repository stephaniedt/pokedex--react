import React from "react";
import "./Header.css"

export default function Header(props) {
  return <div className="text-center header"> <span> {props.title}  </span> </div> ;
}