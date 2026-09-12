

const Header = () => {

    

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e);
        
        e.target.reset()

    }

    const handleChange = (e) =>{
        //console.log(e);
        //let dato = document.getElementById('buscar').value
        console.log(e.target.value);
    }
   

  return (
    <div>
        <br />
        <h1>Welcome to React js</h1>
        <br />
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='busca algo' id="buscar" onChange={handleChange}/>
            <button type='submit'>buscar</button>
        </form>
        
        <br />
    </div>
  )
}

export default Header