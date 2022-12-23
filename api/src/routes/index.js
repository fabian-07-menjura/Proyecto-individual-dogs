const { Router } = require("express");
const e = require("express");
const listarRazas = require("../controller/listarRazas.js");
const crearRaza = require("../controller/crearRaza.js");
const listarTemperamentos = require("../controller/temperamentos.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// ---------------------Añadir razas---------------------------------------
router.post("/dogs", async (req, res) => {
  const { name, height, weight, life_span, temperament } = req.body;
  try {
    let solicitud = await crearRaza(
      name,
      height,
      weight,
      life_span,
      temperament
    );
    res.send(solicitud);
  } catch (err) {
    res.send("A ocurrido un error al intentar añadir tu raza " + err.message);
  }
});

// --------------------------Solicitar todas las razas------------------
router.get("/dogs", async (req, res) => {
  try {
    res.send(await listarRazas());
  } catch (error) {
    res.send(error);
  }
});

// ------------------------AÑADIR TEMPERAMENTOS--------------
router.get("/temperaments", async (req, res) => {
  try {
    let solicitud = await listarTemperamentos();
    res.send(solicitud);
  } catch (error) {
    res.send("hubo un error al listar los temeramentos ", error);
  }
});

// --------------solicitar razas por Query----------
// --no olvidar que debo acceder a esta ruta (doooooogs) si no se cruzara con otra ruta-------------------------
router.get("/do+gs", async (req, res) => {
  let { name } = req.query;
  try {
    let solicitud = await listarRazas();
    let razasFiltradas = solicitud.filter((e) =>
      e.name.toLowerCase().includes(`${name.toLowerCase()}`)
    );
    res.send(razasFiltradas);
  } catch (error) {
    res.send(error);
  }
});

router.get("/filtrarTemps", async (req, res) => {
  let { name } = req.query;
  try {
    let solicitud = await listarRazas();
    let busqueda = solicitud.filter((e) => {
      if (typeof e.temperament === "string") {
        return e.temperament.toLowerCase().includes(`${name.toLowerCase()}`);
      }
    });
    res.send(busqueda);
  } catch (error) {
    res.send(error);
  }
});

// ------------------Solicitar razas por id-------------
router.get("/dogs/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let solicitud = await listarRazas();
    let razaId = solicitud.find((e) => e.id == id);
    res.status(200).send(razaId);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
