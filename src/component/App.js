import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home" ;
import Movies from '../page/Movies';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;