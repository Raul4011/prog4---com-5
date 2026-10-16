import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <br />
        <h3>Page Not Found</h3>
        <br />
        <Link to="/">Go to Home</Link>
        <br />
    </div>
  )
}

export default NotFound