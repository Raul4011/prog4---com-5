const express = require("express");

const { getPeliculas, getPelicula, createPelicula, updatePelicula, deletePelicula } = require("../controllers/peliculas.controllers");

const router = express.Router();


router.get("/peliculas",getPeliculas);
router.get("/peliculas/:id",getPelicula);
router.post("/peliculas",createPelicula);
router.put("/peliculas/:id",updatePelicula);
router.delete("/peliculas/:id",deletePelicula);


module.exports = router;