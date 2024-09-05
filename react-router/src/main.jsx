import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'

//FIRST WAY
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//     {
//       path : "",
//       element:<Home/>
//     },
//     {
//       path : "about",
//       element:<About/>
//     },
//     {
//       path : "contact",
//       element:<Contact/>
//     }
//   ]
//   }
// ])

//SECOND WAY
const router=createBrowserRouter(//router can be made only using this
  createRoutesFromElements(
    //It is a top level,tabhi isme outlet aa parhe hai
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}>
        <Route path="shivam(about/shivam)"></Route>
      </Route>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
         loader={githubInfoLoader}
         path="github" 
         element={<Github/>}/>
    </Route>
  )
)

//making of router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
