import {Outlet,Navigate} from 'react-router-dom'

const PrivateRoute = () => {
  
    const permiso = true

    // if (!permiso) {
    //   return <Navigate to={'/'} replace/> 
    // }

    // return <Outlet />

    return permiso ? <Outlet /> :<Navigate to={'/'} replace/> 

}

export default PrivateRoute