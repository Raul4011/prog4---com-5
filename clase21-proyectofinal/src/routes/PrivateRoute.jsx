import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import useAuthStore from '../store/authStore'

const PrivateRoute = () => {

    const user = useAuthStore()
    console.log(user);

    return user ? <Outlet /> : <Navigate to="/login" replace />

}

export default PrivateRoute