import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../api/api.js'
const allMovies=await JSON.parse(getData())
console.log(allMovies);



export default function HomePage() {
    const [movie , setMovie] = useState({})
  return (
    <div >
        <h1 className='mt-10 text-5xl'>Movie Night</h1>
        <h2 className='text-3xl mt-2'>Search a movie and pick your seats</h2>
        <input type="text" className='border mt-9 ml-3 h-15 w-150 rounded-2xl text-3xl'/>
        <p className='border mt-10'></p>
        <p>Showing {} results</p>
        <Link to='/MoviePage' >link</Link>
    </div>
  )
}
