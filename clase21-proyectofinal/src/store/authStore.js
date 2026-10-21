import { create } from "zustand";

const useAuthStore = create((set) => ({
 //propiedades
     user:JSON.parse(localStorage.getItem('user')) || null,
     token:null,
     //metodos
     login:(nuevoUser)=>{
         localStorage.setItem('user',JSON.stringify(nuevoUser))
         set({user:nuevoUser})},
     logout:()=>{
         localStorage.removeItem('user')
         set({user:null})}
 
}));

export default useAuthStore;
