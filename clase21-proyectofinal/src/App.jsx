import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/public/Home"
import Login from "./pages/public/Login"
import UsersRoute from "./router/UsersRoute"
import Movies from "./pages/users/Movies"
import MovieDetail from "./pages/users/MovieDetail"
import NotFound from "./pages/public/NotFound"
import AdminRoute from "./router/AdminRoute"
import AdminDashBoard from "./pages/admin/AdminDashBoard"
import AdminMovies from "./pages/admin/AdminMovies"
import AdminUsers from "./pages/admin/AdminUsers"
import AdminMovieDetail from "./pages/admin/AdminMovieDetail"
import AdminMovieEdit from "./pages/admin/AdminMovieEdit"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<UsersRoute />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashBoard />}>
            <Route path='/admin/movies' element={<AdminMovies />} />
            <Route path='/admin/movies/:id' element={<AdminMovieDetail />} />
            <Route path="/admin/movies/edit/:id" element={<AdminMovieEdit/>}/>
            <Route path='/admin/users' element={<AdminUsers />} />
          </Route >

        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App