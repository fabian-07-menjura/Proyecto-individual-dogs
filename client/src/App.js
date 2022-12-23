import "./App.css";
import { Route } from "react-router-dom";
import PaginaPrincipal from "./components/PaginaPrincipal/paginaPrincipal.jsx";
import React from "react";
import Home from "./components/Home/home.jsx";
import Detalles from "./components/Detalles/detalles.jsx";
import CrearRaza from "./components/CrearRaza/crearRaza.jsx";
import RazaRegistrada from "./components/RazaRegistrada/razaRegistrada.jsx";

function App() {
  return (
    // <PaginaPrincipal />
    <>
      <Route exact path={"/"} component={PaginaPrincipal} />
      <Route exact path={"/home/"} component={Home} />
      <Route exact path={"/detail/:id"} component={Detalles} />
      <Route exact path={"/crearRaza"} component={CrearRaza} />
      <Route exact path={"/RazaRegistrada"} component={RazaRegistrada} />
    </>
  );
}

export default App;
