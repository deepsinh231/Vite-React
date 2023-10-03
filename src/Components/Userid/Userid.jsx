import React from 'react'
import { useParams } from 'react-router-dom'

function Userid() {
  const {id} = useParams()
  return (
    <div className='text-center py-5 text-lg bg-slate-500'>Userid is  {id}</div>
  )
}

export default Userid