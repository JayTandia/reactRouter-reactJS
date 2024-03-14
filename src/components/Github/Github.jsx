import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    /* const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/jaytandia')
        .then(res => res.json())
        .then(data => {setData(data)})
    },[]) */
  return (
    <div className='text-3xl bg-slate-400 p-8 text-white '>Github Followers : {data.followers}
    <img className='mt-8 flex justify-between' src={data.avatar_url} alt='github-img' />
    </div>
  ) 
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/jaytandia')
    return response.json()
}

