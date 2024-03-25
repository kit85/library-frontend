import { Box, Button, Card, CardContent, Divider, Typography } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import { BookType } from '../types';
import { Link, useParams } from 'react-router-dom';


const CheckoutAndReview = () => {
    const [book, setBook] = useState<BookType>();
    const { id } = useParams();
    

    useEffect(() => {
        const fetchBookById = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/book/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                const result = await response.json()
                setBook(result)
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchBookById();
    }, [])

    return (
        
            <Card  sx={{maxWidth:400, height:400 }}>
                <CardContent>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h5" marginRight="8%">
                            0/5
                        </Typography>
                        <Typography>
                            Books checked out
                        </Typography>
                    </Box>
                    <Box display="flex" textAlign="center" marginTop="5px" justifyContent="center">
                        <Divider sx={{ width: "95%" }} />
                    </Box>
                    <Box sx={{marginTop:3}}>
                        {book && book.copiesAvailable && book.copiesAvailable > 0 ?
                            <Typography fontSize="20px" fontWeight="bold" color="success.main">
                                Available
                            </Typography>
                            :
                            <Typography>
                                Wait List
                            </Typography>
                        }
                    </Box>
                    <Box display="flex" flexDirection="row" sx={{marginTop:3}}>
                        <Typography marginRight="10%">{book?.copiesAvailable} Copies </Typography>
                        <Typography>{book?.copies} available</Typography>
                    </Box>
                </CardContent>
                <Box  marginLeft="15px" sx={{marginTop:3}}>
                    <Button variant='contained' color='success' component={Link} to="/login" >Sign in</Button>
                </Box>
                <Box display="flex" textAlign="center" marginTop="20px" justifyContent="center" sx={{marginTop:3}}>
                    <Divider sx={{ width: "95%" }} />
                </Box>
                <Typography mt={3} marginLeft={3}>This number can change until placing order has completed.</Typography>
                <Typography mt={3} marginLeft="15px">Sign in to be able to leave a review</Typography>
            </Card>
       
    )
}

export default CheckoutAndReview