import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/navbar'
import News from '../Views/news'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Navbar/>
        } />
        <Route path="/stasiun" element={
          <Navbar>
            <News/>
          </Navbar>
        } />
      </Routes>
    </BrowserRouter>
  )
}
