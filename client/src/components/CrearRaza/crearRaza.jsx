import React, { useState } from "react";
import { useEffect } from "react";
import "./crearRaza.css";
import { Link, useHistory } from "react-router-dom";

export default function CrearRaza() {
  let [temperaments, setTemperaments] = useState([]);
  let ruta = useHistory();

  let [obj, setObj] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
  });
  useEffect(() => {
    fetch("http://localhost:3001/temperaments")
      .then((respuesta) => respuesta.json())
      .then((respuesta1) => setTemperaments(respuesta1))
      .catch((err) => console.log(err));
  }, []);

  const verificarInputs = (e) => {
    // ----------------------------------
    if (e.target.name === "name") {
      if (!e.target.value.length) {
        console.log(e.target.value);
        e.target.setCustomValidity("Escribe tu raza de perro");
      } else {
        e.target.setCustomValidity("");
        setObj({ ...obj, name: e.target.value });
        // [property]:value. los braket es par que coloque el valor que tiene property
        console.log(obj);
      }
    }
    // --------------------------------------
    if (e.target.name === "height") {
      if (!e.target.value.length) {
        e.target.setCustomValidity("El rango de altura es de 20 a 100cm");
      } else {
        if (e.target.value < 20 || e.target.value > 100) {
          e.target.setCustomValidity(
            "El rango de altura es de 20 a 100cm obligatoriamente"
          );
        } else {
          e.target.setCustomValidity("");
          setObj({ ...obj, height: e.target.value });

          console.log(obj);
        }
      }
    }
    // --------------------------------------
    if (e.target.name === "weight") {
      if (!e.target.value.length) {
        e.target.setCustomValidity("El rango de peso es de 1 a 70kg");
      } else {
        if (e.target.value < 1 || e.target.value > 70) {
          e.target.setCustomValidity(
            "El rango de peso es de 1 a 70kg obligatoriamente"
          );
        } else {
          e.target.setCustomValidity("");
          setObj({ ...obj, weight: e.target.value });

          console.log(obj);
        }
      }
    }

    if (e.target.name === "life_span") {
      if (!e.target.value.length) {
        e.target.setCustomValidity(
          "El rango de edades de los perros es de 8 a 20 años"
        );
      } else {
        if (e.target.value < 8 || e.target.value > 20) {
          e.target.setCustomValidity(
            "El rango de edades de los perros es de 8 a 20 años obligariamente"
          );
        } else {
          e.target.setCustomValidity("");
          obj = { ...obj, life_span: e.target.value };
          console.log(obj);
        }
      }
    }
  };

  const alamcenarTemp = (e) => {
    let select = e.target;
    let frase = select.options[select.selectedIndex].text;
    setObj(() => ({ ...obj, temperaments: [...obj.temperaments, frase] }));
    console.log(obj);
  };

  const enviarData = (e) => {
    e.preventDefault();
    if (obj.temperaments.length) {
      let temperamentos1 = obj.temperaments;
      let temperamentos2 = temperamentos1.join(", ");
      console.log(temperamentos2);

      console.log(obj);
      return fetch("http://localhost:3001/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: obj.name,
          height: obj.height,
          weight: obj.weight,
          life_span: obj.life_span,
          temperament: temperamentos2,
        }),
      })
        .then((res) => ruta.push("/RazaRegistrada"))
        .catch((err) => console.log(err));
    }
    return alert("debes ingresar minimo dos temperamentos");
  };

  // --------------------------------------------------------------------------
  return (
    <div>
      <section class="seccionCrearRaza ">
        <h1 class="titulo">Nueva Raza</h1>
        <form
          class="formulario"
          autocomplete="off"
          onSubmit={(e) => enviarData(e)}
        >
          <div class="input-container">
            <input
              name="name"
              id="nombre"
              class="input"
              type="string"
              placeholder="Nombre"
              onChange={(e) => verificarInputs(e)}
              onBlur={(e) => verificarInputs(e)}
              required
            />
            <label class="input-label" htmlfor="name">
              Name
            </label>
          </div>
          <div class="input-container">
            <input
              name="height"
              class="input"
              type="number"
              placeholder="height"
              onChange={(e) => verificarInputs(e)}
              onBlur={(e) => verificarInputs(e)}
              required
            />
            <label class="input-label" htmlfor="height">
              Height
            </label>
          </div>
          <div class="input-container">
            <input
            //  value={form.weight}---> importante que mi value sea el valor de el estado
              name="weight"
              class="input"
              type="number"
              placeholder="weight"
              onChange={(e) => verificarInputs(e)}
              onBlur={(e) => verificarInputs(e)}
              required
            />
            <label class="input-label" htmlfor="weight">
              Weight
            </label>
          </div>
          <div class="input-container">
            <input
              name="life_span"
              class="input"
              type="number"
              placeholder="life_span"
              onChange={(e) => verificarInputs(e)}
              onBlur={(e) => verificarInputs(e)}
              required
            />
            <label class="input-label" htmlfor="life_span">
              Life_Span
            </label>
          </div>
          <div class="input-container">
            <p class="tituloTemp">Temperaments</p>
            <select
              name="select"
              className="selectTemp"
              onChange={(e) => alamcenarTemp(e)}
            >
              <option>Select temperaments</option>
              {temperaments.map((e) => (
                <option>{e}</option>
              ))}
            </select>
            {obj.temperaments.map((e) => (
              <p className="tempAñadidos">{e}</p>
            ))}
          </div>
          <div className="divBtn">
            <button type="submit" class="button">
              Add
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
