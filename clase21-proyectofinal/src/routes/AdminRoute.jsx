import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import useAuthStore from '../store/authStore'

const AdminRoute = () => {

  const {user} = useAuthStore()

  //const user = useAuthStore(state=>state.user)
   
  if(!user) {
    return <Navigate to="/login" replace />
  }

  if (user.rol !=="admin") {
    return <Navigate to="/unauthorized" replace/>
  }
  return <Outlet/>

}

export default AdminRoute