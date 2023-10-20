import './App.css';
import React from 'react';
import PlantDataTables from './Routes/PlantDataTables';
import Footprints from './Routes/FootPrints';
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PlantDataTables/>}/>
          <Route exact path='/FOOTPRINTS' element={<Footprints/>}/>
        </Routes>
          
      </BrowserRouter>
      
    </div>
  );
}

export default App;
