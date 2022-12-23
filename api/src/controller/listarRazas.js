const { Temperamento, Raza } = require("../db.js");
const axios = require("axios");
var apikey =
  "live_Ux6LZUjBHcDRekzc9eumanI6Bdtmps6dlkqB5UivZDE2I6Kt3gFXzmjfSCwmgsl6";

const listarRazas = async () => {
  // --------------solicitud a APK--------------
  let solicitud = await axios.get(
    ` https://api.thedogapi.com/v1/breeds?api_key=${apikey}`
  );

  let arreglo = [];
  solicitud.data.forEach((e) => {
    if (e.weight.metric === "NaN") {
      e.weight.metric = "40 - 0";
    }
    var peso = e.weight.metric.split(" - ");

    console.log(peso);
    arreglo.push({
      id: e.id,
      weight: peso[0] == "NaN" ? (peso[0] = 20) : peso[0],
      height: e.height.metric,
      life_span: e.life_span,
      name: e.name,
      temperament: e.temperament,
      origin: e.origin,
      image: e.image.url,
    });
  });

  // ------------------------------------------------
  // -----------solicitud a DB------------------

  let solicitudDb = await Raza.findAll({
    include: Temperamento,
  });

  let names = [];
  solicitudDb.forEach((e) => {
    let temp = [];
    e.temperamentos.forEach((e) => {
      temp.push(e.name);
    });
    names.push({
      id: e.id,
      weight: e.weight,
      height: e.height,
      life_span: e.life_span,
      name: e.name,
      temperament: temp.join(", "),
      origin: e.origin,
      image: e.image,
    });
  });

  if (names.length) {
    return [...names, ...arreglo];
  } else return arreglo;
};

module.exports = listarRazas;
