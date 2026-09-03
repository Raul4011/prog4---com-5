import React from 'react'

const MainBody = () => {

    const getSuplements =async () =>{
        try {

            let response = await fetch('http://localhost:3001/suplementos')
            let suplementos = await response.json()
            console.log(suplementos);
        }catch (error) {
            console.error(error)
        }
    }

    getSuplements()



  return (
    <div>
        <br />




        <br />
    </div>
  )
}

export default MainBody