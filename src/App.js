import React from 'react';
import Idgenerator from './idgenerator';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Idgenerator />}/>  
          <Route path="/reactjslearning_id_generator" element={<Idgenerator />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
