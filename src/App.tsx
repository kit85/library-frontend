import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import "./index.css"
import Navbar from './components/Navbar';

import BookCategoryRoute from './components/BookCategoryRoute';



function App() {
  return (
    <Box>
      <Navbar />
        
      <Outlet />
    </Box>
  );
}

export default App;
