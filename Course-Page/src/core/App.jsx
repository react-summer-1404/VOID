import { useState } from 'react'
import Router from "./router"
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import '../assets/style/index.css'


function App() {

  return (
    <>
     <Toaster position="top-center" />
     <RouterProvider router={Router}/>
    </>
  )
}

export default App
