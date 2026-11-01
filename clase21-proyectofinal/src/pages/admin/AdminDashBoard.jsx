
import { Outlet, NavLink } from "react-router-dom";
import {
  FiFilm,
  FiUsers,
  FiUser,
  FiBarChart2,
  FiGrid,
  FiChevronRight,
} from "react-icons/fi";
import Header from "../../components/Header";

const AdminDashBoard = () => {
  const menuItems = [
    {
      name: "Películas",
      path: "/admin/movies",
      icon: FiFilm,
    },
    {
      name: "Usuarios",
      path: "/admin/users",
      icon: FiUsers,
    },
    {
      name: "Perfiles",
      path: "/admin/perfiles",
      icon: FiUser,
    },
    {
      name: "Estadísticas",
      path: "/admin/estadisticas",
      icon: FiBarChart2,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header />

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-slate-950 text-white md:block">
          {/* Logo */}
          <div className="border-b border-slate-800 px-6 py-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/20">
                <FiGrid size={23} />
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-wide">
                  Admin Panel
                </h2>
                <p className="text-xs text-slate-400">
                  Centro de administración
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 px-4 py-6">
            <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Menú principal
            </p>

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-indigo-500 text-white shadow-lg shadow-indigo-950/30"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        <Icon size={20} />
                        <span className="text-sm font-medium">
                          {item.name}
                        </span>
                      </div>

                      <FiChevronRight
                        size={16}
                        className={`transition-all ${
                          isActive
                            ? "opacity-100"
                            : "translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Info card */}
          <div className="mx-4 mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <FiBarChart2 size={20} />
            </div>

            <p className="text-sm font-semibold text-white">
              Panel de control
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Gestioná películas, usuarios y perfiles desde un solo lugar.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-7xl">
            {/* Page heading */}
            <div className="mb-8">
              <p className="text-sm font-medium text-indigo-600">
                Administración / Dashboard
              </p>

              <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Panel de administración
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Gestioná y supervisá el contenido de tu plataforma.
              </p>
            </div>

            {/* Dynamic content */}
            <section className="min-h-[400px] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <Outlet />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashBoard;
