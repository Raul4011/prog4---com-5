import React from 'react'
import Hijo3 from './Hijo3'
import Hijo4 from './Hijo4'

const Padre2 = ({getCount,getForm}) => {
  return (
    <div>
        <Hijo3 getCount={getCount}/>
        <Hijo4 getForm={getForm}/>
    </div>
  )
}

export default Padre2