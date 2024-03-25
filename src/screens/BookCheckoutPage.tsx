import { Box, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BookType } from '../types';
import CheckoutAndReview from '../components/CheckoutAndReview';
import StarRating from '../components/StarRating';
const BookCheckoutPage = () => {
  const [book, setBook] = useState<BookType>();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const imgSrc = `data:image/png;base64,${book?.img}`

  useEffect(() => {
    const fetchBookById = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/book/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const result = await response.json()
        setBook(result)
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {

        console.log("Error fetching data:", error)
      }
    }
    fetchBookById();
  }, [])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }





  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Box marginLeft={3} mt={3}>
              {book && (
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                  <Box sx={{ maxWidth: 200 }} component="img" src={imgSrc} alt="Book Cover" />
                  <Box ml={{ xs: 0, md: 3 }} mt={{ xs: 2, md: 0 }}>
                    <Typography variant="h4">{book.title}</Typography>
                    <Typography color="primary" variant="h5">{book.author}</Typography>
                    <Typography variant="h5">{book.description}</Typography>
                    <StarRating />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mt={3} display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Box>
              <CheckoutAndReview />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" textAlign="center" marginTop="20px" justifyContent="center" sx={{ marginTop: 3 }}>
        <Divider sx={{ width: "95%", mt: 3 }} />
      </Box>

    </Box>
  );

}

export default BookCheckoutPage