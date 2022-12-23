const { Temperamento, Raza } = require("../db.js");
const axios = require("axios");
var apikey =
  "live_Ux6LZUjBHcDRekzc9eumanI6Bdtmps6dlkqB5UivZDE2I6Kt3gFXzmjfSCwmgsl6";

const listarTemperamentos = async () => {
  let solicitud = await axios.get(
    ` https://api.thedogapi.com/v1/breeds?api_key=${apikey}`
  );
  var arreglo = [];
  solicitud.data.forEach((element) => {
    if (element.temperament) {
      let temperamento = element.temperament.split(", ");
      temperamento.forEach((e) => {
        if (!arreglo.includes(e)) {
          arreglo.push(e);
        }
      });
    }
  });
  if (arreglo.length) {
    arreglo.forEach(async (e) => {
      var nombre = e;
      await Temperamento.findOrCreate({
        where: { name: nombre },
        defaults: {
          name: nombre,
        },
      });
    });
  }
  return arreglo;
};

module.exports = listarTemperamentos;
