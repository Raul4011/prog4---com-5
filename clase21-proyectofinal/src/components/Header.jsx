
import { FiFilm, FiLogOut, FiUser } from "react-icons/fi";
import useAuthStore from "../store/useAuthStore";

const Header = () => {
  const { user, logout } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950 text-white shadow-lg">
      <div className="flex min-h-16 items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/20">
            <FiFilm size={23} />
          </div>

          <div>
            <h1 className="text-lg font-extrabold tracking-wider sm:text-xl">
              CINE<span className="text-indigo-400">VERSE</span>
            </h1>
            <p className="hidden text-xs text-slate-400 sm:block">
              Tu universo de películas
            </p>
          </div>
        </div>

        {/* User and logout */}
        <div className="flex items-center gap-3 sm:gap-5">
          {user && (
            <>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-indigo-400">
                  <FiUser size={18} />
                </div>

                <div className="max-w-40">
                  <p className="text-xs text-slate-400">Bienvenido</p>
                  <p className="truncate text-sm font-semibold text-white">
                    {user.nombre || user.name || user.email || "Usuario"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => logout()}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 sm:px-4"
              >
                <FiLogOut size={18} />
                <span className="hidden sm:inline">Cerrar sesión</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
