const Review = require("../models/Review");

exports.obtenerResenas = async (req, res) => {
  const resenas = await Review.find({ juegoId: req.params.id });
  res.json(resenas);
};

exports.crearResena = async (req, res) => {
  const nueva = new Review(req.body);
  const guardada = await nueva.save();

  res.json({
    mensaje: "Resena creada",
    resena: guardada
  });
};

exports.eliminarResena = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Resena eliminada" });
};