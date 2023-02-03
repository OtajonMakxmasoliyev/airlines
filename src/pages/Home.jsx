import React from 'react'
import { Book } from '../components/Booking/book'
import Navbar from '../components/Navbar/Navbar'
import Showcase from '../components/Showcase/showcase'


const Home = () => {
  return (
    <div>
     <Navbar/>
     <Showcase/>
     <Book/>
    </div>
  )
}

export default Home