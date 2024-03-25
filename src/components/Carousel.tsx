
import { Box, Button,  Grid, IconButton,} from '@mui/material';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ReturnBook from './ReturnBook';
import { BookType } from '../types';




const Carousel: FunctionComponent = () => {
    const [book, setBook] = useState<BookType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [slideDirection, setSlideDirection] = useState<"right" | "left" | undefined>("left");
    const [booksPerPage, setBooksPerPage] = useState<number>(3);


    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/book");
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                const result = await response.json()
                setBook(result)

            } catch (error) {
                console.log("Error fetching data:", error)
            }
        };
        fetchBooks();
    }, []);


    const maxPage = Math.ceil(book.length / booksPerPage);
    const goToNextBooks = () => {
        console.log("Going to next books...");
        setSlideDirection("left");
        setCurrentPage(prevIndex => (prevIndex + 1) % maxPage);
    };

    const goToPreviousBooks = () => {
        console.log("Going to Previous books...");
        setSlideDirection("right");
        setCurrentPage(prevIndex => (prevIndex - 1) % maxPage);

    };



    return (

        <Box sx={{ width: "100%", position: "relative", marginTop: "40px" }}>
            <IconButton onClick={goToPreviousBooks} style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}>
                <NavigateBeforeIcon />
            </IconButton>
            <IconButton onClick={goToNextBooks} style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}>
                <NavigateNextIcon />
            </IconButton>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ width: "80%" }}>
                    {book.slice(currentPage * booksPerPage, (currentPage + 1) * booksPerPage).map((book, index) => (
                        <Grid item key={`grid-${index}`} xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{ margin: "10px" }}>
                                <Slide direction={slideDirection} in={true}>
                                    <Stack spacing={2} direction="row" alignContent="center" justifyContent="center">
                                        <ReturnBook book={book} key={book.id} />
                                    </Stack>
                                </Slide>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                <Button component={Link} to="/search/:search" variant="contained" >
                    View More
                </Button>
            </Box>
        </Box>



    );
};

export default Carousel;
