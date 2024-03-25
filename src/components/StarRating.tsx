import { Box, Rating, Stack } from '@mui/material'
import React from 'react'

const StarRating = () => {
    return (
        <Box>
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Stack>
        </Box>
    )
}

export default StarRating