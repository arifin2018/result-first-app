import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/navbar'
import News from '../Views/news'
import NewsDetail from '../Views/newsDetail'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Navbar/>
        } />
        <Route path="/news" element={
          <Navbar>
            <News/>
          </Navbar>
        } />
        <Route path="/news/:details" element={
          <Navbar>
            <NewsDetail/>
          </Navbar>
        } />
      </Routes>
    </BrowserRouter>
  )
}
