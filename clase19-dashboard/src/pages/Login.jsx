import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //POST enciando esos datos al backend

        if(username === 'raul' && password === '1234'){
            alert('welcome BOSS')
            navigate('/home')
        }else {
            alert('usuario o contraseña incorrectos')
            e.target.reset()
            setUsername('')
            setPassword('') 
        }



    }



    return (
        <div className='bg-gray-400 text-center'>
            <br /><br />
            <form action="" onSubmit={handleSubmit} className='bg-amber-200 w-[30%] text-center'>
                <label htmlFor="">usuario</label>
                <input type="text"  className='bg-blue-100' onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor="">password</label>
                <input type="password" className='bg-blue-100' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type='submit' className='text-black bg-blue-400 border rounded'>login</button>
            </form>
            <br /><br />
            
        </div>
    )
}

export default Login