import './App.css';
import React from 'react';
import PlantDataTables from './Routes/PlantDataTables';
import './styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PlantDataTables/>}/>
          <Route/>
        </Routes>
          
      </BrowserRouter>
      
    </div>
  );
}

export default App;
