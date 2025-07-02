import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Animal from './Animal'
import Flower from './Flower'
import Fruit from './Fruit'
import Music from './Music'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Animal/>}></Route>
          <Route path='/flower' element={<Flower/>}></Route>
          <Route path='/fruit' element={<Fruit/>}></Route>
          <Route path='/music' element={<Music/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
