const express = require("express");
const router = express.Router();

const {
  obtenerJuegos,
  crearJuego,
  eliminarJuego
} = require("../controllers/gameController");

// Rutas correctas
router.get("/", obtenerJuegos);
router.post("/", crearJuego);
router.delete("/:id", eliminarJuego);

module.exports = router;
