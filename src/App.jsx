import React from 'react'
import Addtodo from './componet/addtodo'
import Llisttodo from './componet/Llisttodo'

function App() {
  return (
    <>
      <div className="w-full bg-slate-600 h-100vh">

        <div className='m-auto overflow-hidden  w-3/4'>

          <Addtodo />
          <Llisttodo />
        </div>
      </div>
    </>
  )
}

export default App
