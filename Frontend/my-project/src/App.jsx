import React from 'react'
import {Routes,Route} from 'react-router'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import TicketsPage from './pages/TicketsPage'
export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/MoviePage' element={<MoviePage/>}/>
      <Route path='/TicketsPage' element={<TicketsPage/>}/>
    </Routes>
    </>
  )
}

