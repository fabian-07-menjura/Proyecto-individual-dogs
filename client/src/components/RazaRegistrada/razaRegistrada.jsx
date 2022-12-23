import React from "react";
import { Link } from "react-router-dom";
import "./razaRegistrada.css";

export default function RazaRegistrada() {
  return (
    <div class="registroCompletado">
      <span class="iconoRegistroCompletado"></span>
      <h1 class="textoRegistroCompletado">¡Successfully Registered Breed!</h1>
      <Link to={"/home"}>
        <button className="btnVerRazas">Go home</button>
      </Link>
    </div>
  );
}
