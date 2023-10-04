import React, { useEffect, useState } from 'react'
import Card from "./Componet/Card.jsx"
import Btn from "./Componet/Btn.jsx"
import { Themeprovider } from './theme/theme.js'


function App() {
  const [themevalue, setthemevalue] = useState("light")
  const darkTheme = () => {
    setthemevalue("dark")
  }
  const lightTheme = () => {
    setthemevalue("light")
  }
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark") 
    document.querySelector("html").classList.add(themevalue) 
  }, [themevalue])

  return (
    <Themeprovider value={{ themevalue, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />

          </div>
        </div>
      </div>
    </Themeprovider>
  )
}

export default App
