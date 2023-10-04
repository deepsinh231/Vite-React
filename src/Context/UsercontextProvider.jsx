import React, { useState } from 'react'
import Usercontext from './Usercontext'

const UsercontextProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    return (
        <>
            <Usercontext.Provider value={{ setuser, user }}>
                {children}
            </Usercontext.Provider>
        </>
    )
}
export default UsercontextProvider;