const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  juegoId: {
    type: String,
    required: true
  },
  texto: {
    type: String,
    required: true
  },
  estrellas: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Review", ReviewSchema);
