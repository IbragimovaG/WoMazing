import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Collection from './pages/collection/Index'
export default function App() {
  return (
    <div className='2xl:container m-auto'>
      <Navbar/>
      <Home/>
      <Collection/>
    </div>
  )
}
