import {Outlet,Navigate} from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'

const UsersRoute = () => {
  
    const {user} = useAuthStore()


if (!user) {
    return <Navigate to={'/login'} replace/>
}

return <Outlet/>  


// return user ? <Outlet/> :  <Navigate to={'/login'} replace/>



}

export default UsersRoute