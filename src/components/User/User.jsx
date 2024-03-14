import React from 'react'
import { useParams } from 'react-router-dom'



function User() {
    const {userid} = useParams()
  return (
    <div className='text-3xl bg-slate-400 p-8 text-white '>User: {userid} </div>
  )
}

export default User