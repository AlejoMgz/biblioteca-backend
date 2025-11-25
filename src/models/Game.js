const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  plataformas: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: true },
  horas: { type: Number, default: 0}
},{
  timestamps:true
} );

module.exports = mongoose.model("Game", GameSchema);
