import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Github,Gitlogininfo, Home, Userid } from './Components'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//       },
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={< Home />} />
      <Route path='contact' element={Contact()} />
      <Route path='about' element={<About />} />
      <Route path='userid/:id' element={<Userid />} />
      <Route
        loader={Gitlogininfo}
        path='github'
        element={<Github />} />
    </Route>
  ))

ReactDOM.createRoot(document.getElementById('Deepsinh231')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
