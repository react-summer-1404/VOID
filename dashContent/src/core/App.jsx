import { useState } from 'react'
import "../assets/style/App.css"
import Dashboard from "../component/dashboard"
import Router from "./router"
import { RouterProvider } from 'react-router-dom'

function App  () {
  

  return (
     <>
     <RouterProvider router={Router}/>
    </>
  )
}

export default App
