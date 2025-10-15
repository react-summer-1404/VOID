import { useState } from 'react'
import Router from "./router"
import { RouterProvider } from 'react-router-dom'
import './assets/style/App.css'


function App() {

  return (
    <>
     <RouterProvider router={Router}/>
    </>
  )
}

export default App
