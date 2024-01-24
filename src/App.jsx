import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;