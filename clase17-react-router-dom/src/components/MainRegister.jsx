import React from 'react'

const MainRegister = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-black/30 backdrop-blur">

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800">
              <span className="text-xl text-slate-300">+</span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Crear cuenta
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Completá tus datos para registrarte
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {/* Nombre */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Nombre
              </label>

              <input
                type="text"
                placeholder="Juan"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-200 focus:border-slate-500 focus:bg-slate-800 focus:ring-2 focus:ring-slate-700"
              />
            </div>

            {/* Apellido */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Apellido
              </label>

              <input
                type="text"
                placeholder="Pérez"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-200 focus:border-slate-500 focus:bg-slate-800 focus:ring-2 focus:ring-slate-700"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="juan@email.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-200 focus:border-slate-500 focus:bg-slate-800 focus:ring-2 focus:ring-slate-700"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Teléfono
              </label>

              <input
                type="tel"
                placeholder="+54 381 555-5555"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-200 focus:border-slate-500 focus:bg-slate-800 focus:ring-2 focus:ring-slate-700"
              />
            </div>

            {/* Fecha de nacimiento */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Fecha de nacimiento
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-slate-400 outline-none transition duration-200 focus:border-slate-500 focus:bg-slate-800 focus:ring-2 focus:ring-slate-700"
              />
            </div>

            {/* Ciudad */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Ciudad
              </label>

              <input
                type="text"
                placeholder="San Miguel de Tucumán"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition duration-200 focus:border-slate-500 focus:bg-slate-800 focus:ring-2 focus:ring-slate-700"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-3 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition duration-200 hover:bg-slate-200 active:scale-[0.98]"
            >
              Registrarme
            </button>

          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-500">
            Al registrarte aceptás nuestros términos y condiciones.
          </p>

        </div>
      </div>
    </div>
  )
}

export default MainRegister