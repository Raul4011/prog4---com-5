import {create} from 'zustand'


const useStore = create((set)=>({
    //propiedades

    user:localStorage.getItem('user'),
    token:"",
    nombre:'',
    mail:'',
    contador:0,
    color:false,
    carrito:[],

    //metodos
    changeName:(nuevoNombre)=>set({nombre:nuevoNombre}),
    changeMail:(nuevoMail)=>set({mail:nuevoMail}),
    incrementar:()=>set((state)=>({...state,contador:state.contador+1})),
    decrementar:()=>set((state)=>({contador:state.contador-1})),
    changeColor:()=>set((state)=>({color:!state.color})),

    //agregarCarrito:()=>set((state)=>({[...state,]}))

}))


export default useStore