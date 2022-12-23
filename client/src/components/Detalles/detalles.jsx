import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./detalles.css";
import * as actions from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";

export default function Detalles(props) {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(actions.solicitarDetalles(id));

    return () => {
      dispatch({ type: "VACIAR_ESTADO", payload: {} });
    };
  }, []);

  var info = useSelector((state) => state.detalleRaza);

  return (
    <div className="divDetalle">
      {info.name ? (
        <div className="detalleCard">
          <img src={info.image} alt="imagen de mascota" />
          <section>
            <h1>{info.name}</h1>
            <p>Weight: {info.weight} kg</p>
            <p>Height: {info.height} cm</p>
            <p>Life_span: {info.life_span} </p>
            <p>
              Temperaments: {info.temperament ? info.temperament : "Bipolar"}
            </p>
          </section>
          <div className="divBtn">
            <Link to={"/home"}>
              <button className="volver">↖</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}
