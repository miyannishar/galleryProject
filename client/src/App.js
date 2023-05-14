import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import  Home  from './pages/Home'
import  AddCategory from './pages/AddCategory'
import  AddImage  from './pages/AddImage'
// import { Header } from './pages/Header'
import Header from "./pages/Header"


export const App = () => {
  return<>
    <Header/>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/add-category' element={<AddCategory />}></Route>
    <Route path='/add-image' element={<AddImage />}></Route>
  </Routes>
  </>
}

export default App