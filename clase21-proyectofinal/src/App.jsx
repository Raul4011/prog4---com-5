import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import LandingPage from "./pages/Landingpage"
import PrivateRoute from "./routes/PrivateRoute"
import AdminRoute from "./routes/AdminRoute"
import AdminMovies from "./pages/admin/AdminMovies"
import AdminUsers from "./pages/admin/AdminUsers"
import Movies from "./pages/users/Movies"
import MovieDetail from "./pages/users/MovieDetail"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
         <Route path="/login" element={<Login/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/:id" element={<MovieDetail/>}/>
        </Route >
        <Route  element={<AdminRoute/>}>
            <Route path="/admin/movies" elemen={<AdminMovies/>}/>
            <Route path="/admin/users" element={<AdminUsers/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App