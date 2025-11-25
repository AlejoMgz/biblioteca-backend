const express = require("express");
const router = express.Router();

const {
  obtenerResenas,
  crearResena,
  eliminarResena
} = require("../controllers/reviewController");

// Obtener reseñas por juego
router.get("/:id", obtenerResenas);

// Crear reseña
router.post("/", crearResena);

// Eliminar reseña
router.delete("/:id", eliminarResena);

module.exports = router;