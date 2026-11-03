const conection = require("../config/db");

const getPeliculas = (req, res) => {
  const consulta = "SELECT * FROM peliculas";
   conection.query(consulta,(err, rows) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json(rows);
    }}
)
}



const getPelicula = async (req, res) => {
  const { id } = req.params;
  const consulta = "SELECT * FROM peliculas WHERE id = ?";

  const [rows] = await conection.query(consulta, [id]);
  res.status(200).json(rows[0]);
};

const createPelicula = async (req, res) => {
  try {
    const { nombre, genero, duracion, imagen, descarga_url } = req.body;

    const consulta =
      "INSERT INTO peliculas (nombre, genero, duracion, imagen,descarga_url) VALUES (?,?,?,?,?)";

    const [rows] = await conection.query(consulta, [
      nombre,
      genero,
      duracion,
      imagen,
      descarga_url,
    ]);
    res
      .status(201)
      .json({ message: "Pelicula creada correctamente", id: rows.insertId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, genero, duracion, imagen, descarga_url } = req.body;

    const consulta = "UPDATE peliculas SET nombre = ?, genero = ?, duracion = ?, imagen = ?, descarga_url = ? WHERE id = ?";

    const [rows] = await conection.query(consulta, [
      nombre,
      genero,
      duracion,
      imagen,
      descarga_url,
      id
    ]);
    res.status(200).json({ message: "Pelicula actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
}

const deletePelicula = async (req, res) => {
  try {
  const { id } = req.params;
  const consulta = "DELETE FROM peliculas WHERE id = ?";
  const [rows] = await conection.query(consulta, [id]);
  res.status(200).json({ message: "Pelicula eliminada correctamente" });
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {getPeliculas, getPelicula, createPelicula, updatePelicula, deletePelicula};