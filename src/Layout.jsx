import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header, Footer } from './Components'

function Layout() {
    return (
        <>

            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration
                getKey={(location, matches) => {
                    return location.pathname;
                }}
            />
        </>
    )
}

export default Layout