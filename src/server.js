const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const gameRoutes = require("./routes/gameRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/juegos", gameRoutes);
app.use("/api/resenas", reviewRoutes);
app.use("/api/dashboard", dashboardRoutes);
// Conectar BD
connectDB();


  app.listen(5000, () => console.log("Servidor andando...")

);
