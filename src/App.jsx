import React from 'react'
import UsercontextProvider from './Context/UsercontextProvider'
import Login from './componet/Login.jsx'
import Profile from './componet/Profile.jsx'

function App() {
  return (
    <UsercontextProvider>
      <Login />
      <Profile />

    </UsercontextProvider>
  )
}

export default App
