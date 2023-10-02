import React, { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setlenth] = useState(8);
  const [number, setnumber] = useState(true)
  const [char, setchar] = useState(true);
  const [password, setpassword] = useState("");

  const copypsswordref = useRef(null);
  const copyclip = useCallback(() => {
    copypsswordref.current?.select();
    copypsswordref.current?.setSelectionRange(3, 120);
    window.navigator.clipboard.writeText(password);
  }, [password])
  const passwordgenerate = useCallback(() => {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) string += "1234567890";
    if (char) string += "!@#$%^&*()_?<,.";
    let pass = "";
    for (let index = 1; index <= length; index++) {
      let num = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(num);
    }
    setpassword(pass);
  }, [number, char, setpassword, length])

  useEffect(() => {
    passwordgenerate()
  }, [length, char, number])
  return (
    <>
      <div className='w-96 m-auto p-2 bg-zinc-400'>
        <h1 className='text-cyan-200 text-center'>Password Genaret</h1>
        <div className="flex">
          <input
            className='outline-none w-full'
            type="text"
            readOnly
            ref={copypsswordref}
            value={password}
          />
          <button onClick={copyclip} className='bg-green-800 p-2'>Copy</button>
        </div>
        <div className="my-6">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setlenth(e.target.value)}
          />
          <label htmlFor="range">lenth : {length}</label>
          <input
            type="checkbox"
            defaultChecked={number}
            onChange={() => { setnumber((e) => !e) }}
          />
          <label htmlFor="number">number</label>
          <input
            type="checkbox"
            defaultChecked={char}
            onChange={() => { setchar((e) => !e) }}
          />
          <label htmlFor="char">char</label>

        </div>
      </div>
    </>
  )
}

export default App
