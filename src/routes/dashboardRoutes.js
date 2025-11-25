const express = require("express");
const router = express.Router();

const Game = require("../models/Game");
const Review = require("../models/Review");

router.get("/stats", async (req, res) => {

  const juegos = await Game.find();
  const resenas = await Review.find();

  const totalJuegos = juegos.length;
  const totalResenas = resenas.length;

  const promedioEstrellas =
    totalResenas === 0
      ? 0
      : resenas.reduce((acc, r) => acc + r.estrellas, 0) / totalResenas;

  res.json({
    totalJuegos,
    totalResenas,
    promedioEstrellas
  });
});

module.exports = router;