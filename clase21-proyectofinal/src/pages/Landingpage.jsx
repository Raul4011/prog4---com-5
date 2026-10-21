
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function LandingPage() {

    const {user,logout} = useAuthStore()


  return (
    <div className="min-h-screen overflow-hidden bg-gray-950 text-white">
      {/* Navbar */}
      <header className="border-b border-gray-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight"
          >
            Cine
            <span className="text-indigo-400">Scope</span>
          </Link>

          <Link
            to="/peliculas"
            className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-indigo-500 hover:text-white"
          >
            Catálogo
          </Link>
          {user ?<button className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-indigo-500 hover:text-white" onClick={()=>logout()}></button> : <Link to="/login" className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-indigo-500 hover:text-white">login</Link>}
          
        </nav>
      </header>

      {/* Landing */}
      <main className="relative flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-gray-950 to-gray-950" />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

        {/* Content */}
        <section className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            Tu universo cinematográfico
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-8xl">
            Historias que
            <span className="block bg-gradient-to-r from-indigo-300 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              te transportan.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Explorá nuevos mundos, descubrí historias inolvidables
            y encontrá tu próxima película favorita en un solo lugar.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              to="/peliculas"
              className="group inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-semibold shadow-xl shadow-indigo-950/40 transition duration-300 hover:-translate-y-1 hover:bg-indigo-500"
            >
              Explorar películas
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mx-auto mt-16 h-px w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-gray-600">
            Descubrí · Explorá · Disfrutá
          </p>
        </section>

        {/* Decorative elements */}
        <div className="absolute bottom-12 left-[10%] hidden h-3 w-3 rounded-full bg-indigo-400/40 md:block" />

        <div className="absolute right-[12%] top-[20%] hidden h-2 w-2 rounded-full bg-violet-400/50 md:block" />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/70 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} CineScope</p>
          <p>Tu próxima historia comienza acá.</p>
        </div>
      </footer>
    </div>
  );
}



