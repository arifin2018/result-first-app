import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/navbar'
import Antara from '../Views/antara'
import Cnbc from '../Views/cnbc'
import Cnn from '../Views/cnn'
import { IndexProvider } from '../Components/context'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Navbar/>
        } />
        <Route path="/antara" element={
          <Navbar>
            <Antara/>
          </Navbar>
        } />
        <Route path="/cnbc" element={
          <Navbar>
            <IndexProvider>
              <Cnbc/>
            </IndexProvider>
          </Navbar>
        } />
        <Route path="/cnn" element={
          <Navbar>
              <Cnn/>
          </Navbar>
        } />
      </Routes>
    </BrowserRouter>
  )
}
