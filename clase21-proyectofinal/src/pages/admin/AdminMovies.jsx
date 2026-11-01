
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MdDelete,
  MdEdit,
  MdAdd,
  MdClose,
  MdMovie,
  MdSearch,
} from "react-icons/md";
import { FaEye } from "react-icons/fa";

const AdminMovies = () => {
  const initialState = {
    nombre: "",
    genero: "",
    año: "",
    imagen: "",
    url_descarga: "",
  };

  const [form, setForm] = useState(initialState);
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const getMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/peliculas");
      setMovies(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      await axios.post("http://localhost:8000/peliculas", form);

      setForm(initialState);
      setShow(false);
      await getMovies();
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error al agregar la película");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    const result = window.confirm(
      "¿Estás seguro de que querés eliminar esta película?"
    );

    if (!result) return;

    try {
      await axios.delete(`http://localhost:8000/peliculas/${id}`);
      setMovies((prev) => prev.filter((movie) => movie.id !== id));
    } catch (err) {
      console.error(err);
      alert("No se pudo eliminar la película");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const filteredMovies = movies.filter((movie) =>
    `${movie.nombre} ${movie.genero} ${movie.año}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  useEffect(() => {
    getMovies();
  }, []);

  const inputStyle =
    "w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20";

  return (
    <div className="space-y-8">
      {/* Encabezado */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-indigo-600">
            <MdMovie size={20} />
            Administración / Películas
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Listado de películas
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Administrá el catálogo de CINEVERSE.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShow(!show)}
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-lg transition active:scale-95 ${
            show
              ? "bg-slate-700 hover:bg-slate-600"
              : "bg-indigo-600 shadow-indigo-600/20 hover:bg-indigo-500"
          }`}
        >
          {show ? <MdClose size={21} /> : <MdAdd size={22} />}
          {show ? "Cancelar" : "Agregar película"}
        </button>
      </div>

      {/* Resumen */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Películas registradas
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {movies.length}
            </p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <MdMovie size={30} />
          </div>
        </div>
      </div>

      {/* Formulario */}
      {show && (
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
            <h3 className="text-lg font-bold text-slate-900">
              Nueva película
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Completá los datos para agregarla al catálogo.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-sm font-semibold text-slate-700">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ej. Interestelar"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label htmlFor="genero" className="mb-2 block text-sm font-semibold text-slate-700">
                  Género
                </label>
                <input
                  id="genero"
                  name="genero"
                  value={form.genero}
                  onChange={handleChange}
                  placeholder="Ej. Ciencia ficción"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label htmlFor="año" className="mb-2 block text-sm font-semibold text-slate-700">
                  Año
                </label>
                <input
                  id="año"
                  name="año"
                  type="number"
                  min="1888"
                  max="2100"
                  value={form.año}
                  onChange={handleChange}
                  placeholder="2025"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label htmlFor="imagen" className="mb-2 block text-sm font-semibold text-slate-700">
                  URL de la imagen
                </label>
                <input
                  id="imagen"
                  name="imagen"
                  type="url"
                  value={form.imagen}
                  onChange={handleChange}
                  placeholder="https://..."
                  className={inputStyle}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="url_descarga" className="mb-2 block text-sm font-semibold text-slate-700">
                  URL de descarga
                </label>
                <input
                  id="url_descarga"
                  name="url_descarga"
                  type="url"
                  value={form.url_descarga}
                  onChange={handleChange}
                  placeholder="https://..."
                  className={inputStyle}
                  required
                />
              </div>
            </div>

            {form.imagen && (
              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-3">
                <img
                  src={form.imagen}
                  alt="Vista previa"
                  className="h-24 w-16 rounded-lg object-cover"
                />
                <p className="text-sm text-slate-500">
                  Vista previa del póster
                </p>
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setShow(false);
                  setForm(initialState);
                }}
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60"
              >
                {saving ? "Guardando..." : "Guardar película"}
              </button>
            </div>
          </form>
        </section>
      )}

      {/* Tabla */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Catálogo
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {filteredMovies.length} películas encontradas
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <MdSearch
              size={21}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar película..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Película</th>
                <th className="px-6 py-4 font-semibold">Género</th>
                <th className="px-6 py-4 font-semibold">Año</th>
                <th className="px-6 py-4 text-center font-semibold">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-slate-500">
                    Cargando películas...
                  </td>
                </tr>
              ) : filteredMovies.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center">
                    <MdMovie size={36} className="mx-auto mb-3 text-slate-300" />
                    <p className="font-semibold text-slate-700">
                      No hay películas para mostrar
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Probá otra búsqueda o agregá una nueva película.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredMovies.map((movie) => (
                  <tr key={movie.id} className="transition hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={movie.imagen}
                          alt={movie.nombre}
                          className="h-16 w-12 rounded-lg border border-slate-200 bg-slate-100 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-800">
                            {movie.nombre}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            ID: {movie.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        {movie.genero}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {movie.año}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          to={`/admin/movies/${movie.id}`}
                          title="Ver película"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition hover:bg-sky-100"
                        >
                          <FaEye size={17} />
                        </Link>

                        <Link
                          to={`/admin/movies/edit/${movie.id}`}
                          title="Editar película"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600 transition hover:bg-amber-100"
                        >
                          <MdEdit size={19} />
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDelete(movie.id)}
                          title="Eliminar película"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 transition hover:bg-red-100"
                        >
                          <MdDelete size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}

              
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminMovies;
