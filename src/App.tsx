import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import "./index.css"



function App() {
  return (
    <Box>
      <Navbar />
      <Outlet/>
    </Box>
  );
}

export default App;
