import {Link, NavLink } from "react-router-dom"


const Aside = () => {
  return (
    <div>
      <NavLink to="/productos">productos</NavLink>
      <br />
      <NavLink to="/clientes">clientes</NavLink>
      <br />
      <NavLink to="/home">home</NavLink>
      <br />
     
    </div>
  )
}    
  

export default Aside