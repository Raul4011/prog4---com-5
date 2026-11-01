
import React from "react";

const movies = [
  {
    id: 1,
    title: "Interestelar",
    genre: "Ciencia ficción",
    year: 2014,
    rating: "8.7",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 2,
    title: "Dune: Parte Dos",
    genre: "Ciencia ficción",
    year: 2024,
    rating: "8.5",
    image:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    id: 3,
    title: "The Batman",
    genre: "Acción",
    year: 2022,
    rating: "7.8",
    image:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 4,
    title: "Oppenheimer",
    genre: "Drama",
    year: 2023,
    rating: "8.3",
    image:
      "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
  },
];

export default function LandingPage({ user = null }) {
  // Roles: admin | user
  const isAdmin = user?.role === "admin";

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-indigo-900/50
                      bg-slate-950/90 backdrop-blur-md">

        <div className="max-w-7xl mx-auto px-6 py-4
                        flex items-center justify-between">

          <a href="#" className="text-2xl font-extrabold
                                  text-indigo-400">
            🎬 CINEVERSE
          </a>

          <div className="hidden md:flex items-center gap-8
                          text-gray-300 text-sm">
            <a href="#" className="hover:text-indigo-400">
              Inicio
            </a>
            <a href="#peliculas" className="hover:text-indigo-400">
              Películas
            </a>
            <a href="#categorias" className="hover:text-indigo-400">
              Categorías
            </a>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                {isAdmin && (
                  <a
                    href="/admin"
                    className="hidden sm:block text-indigo-400
                               hover:text-indigo-300 text-sm"
                  >
                    Panel Admin
                  </a>
                )}

                <span className="text-sm text-gray-300">
                  Hola, {user.name}
                </span>
              </>
            ) : (
              <>
                <a
                  href="/login"
                  className="text-gray-300 hover:text-white
                             text-sm"
                >
                  Ingresar
                </a>

                <a
                  href="/register"
                  className="bg-indigo-600 hover:bg-indigo-500
                             px-4 py-2 rounded-lg text-sm
                             font-semibold transition"
                >
                  Registrarse
                </a>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden
                          bg-gradient-to-br from-indigo-950
                          via-slate-950 to-slate-900">

        <div className="absolute w-96 h-96 bg-indigo-600/20
                        rounded-full blur-3xl -top-20 -left-20" />

        <div className="relative max-w-7xl mx-auto px-6
                        py-28 text-center">

          <span className="inline-block text-indigo-400
                           uppercase tracking-[0.3em]
                           text-xs font-bold mb-6">
            Bienvenido a Cineverse
          </span>

          <h1 className="text-4xl md:text-7xl font-extrabold
                         leading-tight mb-6">
            Tu próxima película
            <br />
            <span className="text-indigo-500">
              te está esperando.
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto
                        text-lg mb-10">
            Descubrí nuevas historias, explorá diferentes
            géneros y encontrá tus películas favoritas
            en un solo lugar.
          </p>

          <a
            href="#peliculas"
            className="inline-block bg-indigo-600
                       hover:bg-indigo-500 px-8 py-4
                       rounded-xl font-bold transition
                       shadow-lg shadow-indigo-600/20"
          >
            Explorar películas →
          </a>

        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias"
               className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold mb-6">
          Explorar por categorías
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Acción",
            "Aventura",
            "Ciencia ficción",
            "Drama",
            "Terror",
            "Comedia",
            "Romance",
          ].map((category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full
                         border border-indigo-800
                         text-indigo-300 hover:bg-indigo-600
                         hover:text-white transition"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* PELICULAS */}
      <section id="peliculas"
               className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h2 className="text-3xl font-bold">
              Películas destacadas
            </h2>
            <p className="text-gray-400 mt-2">
              Descubrí lo mejor del cine.
            </p>
          </div>

          {isAdmin && (
            <a
              href="/admin/peliculas/nueva"
              className="bg-indigo-600 hover:bg-indigo-500
                         px-4 py-3 rounded-lg text-sm
                         font-semibold transition"
            >
              + Agregar película
            </a>
          )}

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2
                        lg:grid-cols-4 gap-7">

          {movies.map((movie) => (
            <article
              key={movie.id}
              className="group bg-slate-900 rounded-2xl
                         overflow-hidden border border-slate-800
                         hover:border-indigo-500 transition"
            >

              <div className="relative overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-80 object-cover
                             group-hover:scale-105
                             transition duration-500"
                />

                <span className="absolute top-3 right-3
                                 bg-slate-950/80 px-3 py-1
                                 rounded-full text-sm">
                  ⭐ {movie.rating}
                </span>
              </div>

              <div className="p-5">

                <h3 className="text-xl font-bold
                               group-hover:text-indigo-400
                               transition">
                  {movie.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {movie.genre} · {movie.year}
                </p>

                <div className="flex gap-2 mt-5">

                  <a
                    href={`/peliculas/${movie.id}`}
                    className="flex-1 text-center
                               bg-indigo-600 hover:bg-indigo-500
                               py-2 rounded-lg text-sm
                               font-semibold transition"
                  >
                    Ver detalles
                  </a>

                  {isAdmin && (
                    <a
                      href={`/admin/peliculas/${movie.id}/editar`}
                      className="bg-slate-800 hover:bg-slate-700
                                 px-3 py-2 rounded-lg"
                      title="Editar película"
                    >
                      ✏️
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
      {!user && (
        <section className="mx-6 mb-20 rounded-3xl
                            bg-gradient-to-r from-indigo-900
                            to-indigo-700 p-12 text-center">

          <h2 className="text-3xl font-bold mb-4">
            ¡Un mundo de películas te espera!
          </h2>

          <p className="text-indigo-200 mb-7">
            Creá tu cuenta y comenzá a descubrir nuevas historias.
          </p>

          <a
            href="/register"
            className="inline-block bg-white text-indigo-900
                       px-8 py-3 rounded-xl font-bold
                       hover:bg-indigo-100 transition"
          >
            Crear mi cuenta
          </a>
        </section>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-800
                         py-8 text-center">

        <h3 className="text-indigo-400 font-bold text-xl">
          🎬 CINEVERSE
        </h3>

        <p className="text-gray-500 text-sm mt-3">
          © 2026 Cineverse. Todos los derechos reservados.
        </p>

      </footer>

    </div>
  );
}