import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const state = useLoaderData()
  // const [state, setstate] = useState("")
  // useEffect(() => {
  //   fetch('https://api.github.com/users/deepsinh231')
  //     .then((rep) => rep.json())
  //     .then((rep) => setstate(rep))
  // }, [])
  return (
    <>
      <div className='text-center py-5 text-lg bg-slate-500'>
        <h1>Github followers {state.followers}</h1>
        <img className='m-auto' src={state.avatar_url} width={350} alt="" />
      </div>
    </>
  )
}

export default Github
export const Gitlogininfo = async () => {
  let respo = await fetch('https://api.github.com/users/deepsinh231')
  return respo = respo.json();
}