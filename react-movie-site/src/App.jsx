

import './App.css'
import Favorites from './pages/Favourites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favorites />} />
      </Routes>
    </main>
  )
}


export default App
