import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/card";
import Nav from "../Nav/nav";
import "./home.css";
import * as actions from "../../redux/actions/index.js";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.solicitarRazas());
  }, []);

  let info = useSelector((state) => state.razas);

  const ordenarZA = () => {
    dispatch({ type: "ORDENAR_ZA", payload: info });
  };

  const ordenarAZ = () => {
    dispatch({ type: "ORDENAR_AZ", payload: info });
  };

  function pesoAscendente() {
    dispatch({ type: "ORDENAR_PESO_ASCENDENTE", payload: info });
  }

  function pesoDescendente() {
    dispatch({ type: "ORDENAR_PESO_DESCENDENTE", payload: info });
  }

  const BuscarPorRaza = (data) => {
    dispatch(actions.buscarPorRaza(data));
  };

  const buscarPorTemperamento = (temp) => {
    dispatch(actions.buscarPorTemperamento(temp));
  };

  return (
    <div className="home">
      <Nav
        ordenarZA={ordenarZA}
        ordenarAZ={ordenarAZ}
        pesoAscendente={pesoAscendente}
        pesoDescendente={pesoDescendente}
        BuscarPorRaza={BuscarPorRaza}
        buscarPorTemperamento={buscarPorTemperamento}
      />
      {info.length ? (
        info.map((e) => (
          <Card
            id={e.id}
            name={e.name}
            image={e.image}
            temperaments={e.temperament}
            weight={e.weight}
          />
        ))
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}
