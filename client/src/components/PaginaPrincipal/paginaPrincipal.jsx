import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../Home/home";
import "./paginaPrincipal.css";

export function dataTemperaments(temperamentos) {
  return temperamentos;
}

export default function PaginaPrincipal() {
  return (
    <div className="divPrincipal">
      <div>
        <div className="divInformacion">
          <h1>
            Proyecto Individual <br />
            Dogs <hr />
          </h1>
          <p>
            Bienvenidos a mi proyecto individual creado por Fabian Menjura. Aca
            podras buscar y conocer un poco acerca de las razas de perros que
            existen, mas informacion adicional como su origen y altura
          </p>
          <div className="logoDog"></div>
          <Link to={`/home`}>
            <button>Home</button>
          </Link>
        </div>
      </div>
      <div className="divPerro"></div>
    </div>
  );
}
