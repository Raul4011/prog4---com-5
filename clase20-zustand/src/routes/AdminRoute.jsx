import React from 'react'
import {Outlet,Navigate} from "react-router-dom"

const AdminRoute = () => {

    const isLoged =  false
  if(!isLoged) {
    return <Navigate to="/login" replace />
  }

  if (isLoged.rol !=="admin") {
    return <Navigate to="/unauthorized" replace/>
  }

  return <Outlet/>

}

export default AdminRoute