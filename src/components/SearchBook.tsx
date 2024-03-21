import { Autocomplete, Box, Button, Card, CardContent, CardMedia, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { FunctionComponent, useState } from 'react'
import { BookType } from '../types';
import { Link, useNavigate } from 'react-router-dom';



const SearchBook: FunctionComponent<{ book: BookType }> = ({ book }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const imgSrc = `data:image/png;base64,${book.img}`

  const url = "http://localhost:3000/search/:search";


  return (

    <Card sx={{ mt: 3, boxShadow: 3, p: 3, mb: 3, borderRadius: '12px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardMedia
              component="img"
              src={imgSrc}
              alt="book"
              sx={{ maxWidth: { xs: '30%', md: "50%", lg: '100%' }, textAlign: 'center' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h5" component="h5">
              {book.title}
            </Typography>
            <Typography variant="h4">
              {book.author}
            </Typography>
            <Typography variant="body1">
              {book.description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button component={Link} to={`/bookpage/${book.category}/${book.id}`} variant="contained" color="primary" size="medium">
            View Details
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default SearchBook