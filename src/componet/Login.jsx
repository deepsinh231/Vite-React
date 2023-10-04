import React, { useState } from 'react';
import { useContext } from 'react';
import Usercontext from '../Context/Usercontext';


export default function Login() {
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")
    const { setuser } = useContext(Usercontext);
    const SubmitEvent = () => {
        setuser({ username, password })
        setusername("")
        setPassword("")
    }
    return (
        <>
            <div className='text-center'>
                <h1 className='py-6 text-4xl'>Use context</h1>
                <input type="text" value={username} onChange={(e) => setusername(e.target.value)} name="" className='border-none outline-none py-2 px-3' placeholder='usename' id="" />
                <br />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border-none outline-none py-2 px-3' name="" placeholder='password' id="" />
                <br />
                <br />
                <button onClick={SubmitEvent} className='px-20 py-2 outline-green-900 bg-lime-900' type='submit'>submit</button>
            </div>
        </>
    )
}
