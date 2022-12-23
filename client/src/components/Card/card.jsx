import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <Link to={`/detail/${props.id}`}>
        <div className="divImagen ">
          <img
            className="imgDog linkDetalle"
            src={props.image}
            alt="imagen de raza de perro"
          />
        </div>
      </Link>
      <h4>Temperaments</h4>
      <p>{props.temperaments ? props.temperaments : "Bipolar"}</p>
      <h4>Weight</h4>
      <p>{props.weight}kg</p>
    </div>
  );
}
