import { useState, useEffect } from 'react'
// 👉 STEP 2 - React Router imports (Routes, Route and Link)
import { Routes, Route, Link } from 'react-router-dom'
// Components used for the different routes
import Home from './Components/Home'
import Form from './Components/Form'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <nav>
        <h1>Bloomtech Eats</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`items-list`) */}
          <Link to='/'>Home</Link>
          <Link to='pizza'>Order</Link>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build Routes, and a Route for each of the components imported at the top */}
      {/* Note that the components will need some props in order to work */}
      {/* Note that the path that renders Item has a URL parameter */}
      {/* Note that the path that renders Item must support nested routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='pizza' element={<Form/>} />
      </Routes>
    </div>
  );
};
export default App;
