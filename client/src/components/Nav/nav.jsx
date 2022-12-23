import React, { useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

import * as actions from "../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";

export default function Nav(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.solicitarTemperamentos());
  }, []);

  const info = useSelector((state) => state.temperamentos);

  const ordenar = (e) => {
    let select = e.target;
    let frase = select.options[select.selectedIndex].text;
    if (frase === "Z-A") props.ordenarZA();
    if (frase === "A-Z") props.ordenarAZ();
    if (frase === "Rising weight") props.pesoAscendente();
    if (frase === "Falling weight") props.pesoDescendente();
  };

  const ordenarPorTemp = (e) => {
    let select = e.target;
    let frase = select.options[select.selectedIndex].text;
    props.buscarPorTemperamento(frase);
  };

  return (
    <div className="nav">
      <div className="buscarRaza">
        <label className="labelInput">
          Search
          <input
            type="text"
            onChange={(e) => props.BuscarPorRaza(e.target.value)}
            placeholder="write here..."
          />
        </label>
        <label className="selectOrden">
          Sort breeds
          <select onChange={(e) => ordenar(e)}>
            <option value="">Select an option</option>
            <option value="">Z-A</option>
            <option value="">A-Z</option>
            <option value="">Rising weight</option>
            <option value="">Falling weight</option>
          </select>
        </label>

        <label className="selectOrden">
          Filter by temperament
          <select onChange={(e) => ordenarPorTemp(e)}>
            <option value="">Select an option</option>
            {info.map((e) => (
              <option value="">{e}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <Link to={"/crearRaza"}>
          <button className="crearRaza">Create race</button>
        </Link>
      </div>
    </div>
  );
}
