const { Temperamento, Raza } = require("../db.js");
const listarRazas = require("./listarRazas.js");

const crearRaza = async (name, height, weight, life_span, temperament) => {
  let listaRazas = await listarRazas();
  var buscarApi = listaRazas.find((e) => e.name == name);
  if (buscarApi) {
    throw Error("Esta raza ya existe");
  } else {
    var tempIds = [];
    let arreglotemperamento = temperament.split(", ");
    console.log(arreglotemperamento);
    await arreglotemperamento.forEach(async (e) => {
      let solicitud = await Temperamento.findOne({
        where: { name: e },
      });
      console.log(solicitud.id);
      tempIds.push(solicitud.id);
      if (tempIds.length == arreglotemperamento.length) {
        let [objRaza, created] = await Raza.findOrCreate({
          where: { name },
          defaults: {
            id: "USUARIO" + Math.floor(Math.random() * 10),
            name,
            height,
            weight,
            life_span,
            origin: "local",
            image:
              "https://estaticos.serpadres.es/uploads/images/gallery/59d5f5b75cafe8d6407d8db7/perrosrarosg_0.jpg",
          },
        });
        if (created == true) {
          await objRaza.addTemperamentos(tempIds);
        }
      }
    });
    return "raza añadida con exito";
  }
};

module.exports = crearRaza;
