import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { FunctionComponent } from 'react'
import { BookType } from '../types';


const ReturnBook: FunctionComponent<{book: BookType}> = ({ book }) => {
    const imgSrc=`data:image/png;base64,${book.img}`

    return (
        <Box >
            <Card sx={{ maxWidth: "300px" }}>
                <CardMedia
                    component="img"
                    sx={{ height: 250, objectFit: 'contain' }} 
                    image={imgSrc}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {book.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.title}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ReturnBook