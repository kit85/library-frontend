import { Box } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

const BookPage = () => {
  const { category, id, img } = useParams();

  return (
    <Box>
      <h1>Book Page</h1>
      <h2>Category: {category}</h2>
      <h2>Id: {id}</h2>
      <h3>img:{img}</h3>
    </Box>
  )
}

export default BookPage