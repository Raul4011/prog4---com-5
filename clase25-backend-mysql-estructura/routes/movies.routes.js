const express= require('express'); //common js
const router = express.Router();
const {getMovies,getMovie,postMovie,putMovie,deleteMovie} = require('../controllers/movies.controllers.js');
const { validate } = require('../middlewares/validate.js');
const peliculaSchema  = require('../schemas/pelisSchema.js');



router.get('/movies',getMovies)
router.get('/movies/:id',getMovie)
router.post('/movies',validate(peliculaSchema),postMovie)
router.put('/movies/:id',putMovie)
router.delete('/movies/:id',deleteMovie)



module.exports = router


