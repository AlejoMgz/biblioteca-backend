const Game = require("../models/Game");

// Obtener todos los juegos
exports.obtenerJuegos = async (req, res) => {
  try {
    const juegos = await Game.find();
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo juegos" });
  }
};

// Crear juego
exports.crearJuego = async (req, res) => {
  try {
    const nuevo = new Game(req.body);
    await nuevo.save();
    res.json({ mensaje: "Juego creado", juego: nuevo });
  } catch (error) {
    res.status(500).json({ error: "Error creando juego" });
  }
};

// ELIMINAR JUEGO (ESTE ERA EL QUE FALTABA)
exports.eliminarJuego = async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Juego eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error eliminando juego" });
  }
};
