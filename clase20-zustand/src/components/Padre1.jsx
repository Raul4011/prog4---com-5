import React from 'react'
import Hijo1 from './Hijo1'
import Hijo2 from './Hijo2'

const Padre1 = ({count,form}) => {
  return (
    <div>
        <Hijo1 count={count}/>
        <Hijo2 form={form}/>
    </div>
  )
}

export default Padre1