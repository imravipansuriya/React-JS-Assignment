import React, { useEffect, useState } from 'react'
import ImageList from './ImageList';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h1>Photolista</h1>
          </div>
        </div>
        <div className='row'>
          <ImageList />
        </div>
      </div>
    </div>
  );
}

export default App;
