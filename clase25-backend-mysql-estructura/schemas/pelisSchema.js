
const {z} = require("zod");


const peliculaSchema = z.object({
    nombre: z.string().min(1, { message: "El nombre es obligatorio" }).max(50, { message: "El nombre no puede superar los 50 caracteres" }),
    genero: z.string().min(1, { message: "El género es obligatorio" }).max(50, { message: "El género no puede superar los 50 caracteres" }),
    duracion: z.string().min(1, { message: "La duración es obligatoria" }).max(50, { message: "La duración no puede superar los 50 caracteres" }),
    imagen: z.url({ message: "La imagen debe ser una URL válida" }),
    descarga_url: z.url({ message: "La URL de descarga debe ser una URL válida" }),
})

module.exports = peliculaSchema



