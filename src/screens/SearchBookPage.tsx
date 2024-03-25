import { Box, Grid, Card, Typography, CardMedia, CardContent, CardActionArea, Autocomplete, TextField, ListSubheader, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchBook from '../components/SearchBook'
import { BookType } from '../types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';


export const SearchBookPage = () => {
  const [book, setBook] = useState<BookType[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
 
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const queryParam = params.get("q");
  const [searchTerm, setSearchTerm] = useState(queryParam || '');
  const baseUrl = "http://localhost:8080/api/v1/book"


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${baseUrl}`);
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
    };
    fetchBooks();
  }, []);

  
  useEffect(() => {
    setSearchTerm(queryParam || '');
    
    let filteredBooks = book; // Declare filteredBooks variable at the top
    if (queryParam) {
      filteredBooks = book.filter((b) => // Use a different variable name for the book parameter inside filter
      b.title.toLowerCase().includes(queryParam.toLowerCase())
      );
    } 
    setFilteredBooks(filteredBooks);
  }, [queryParam, book]);
  
  
  
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }
  
  /*
  console.log(filteredBooks)

  const sortedBooks = filteredBooks.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  console.log(sortedBooks);
  */



  return (
    <Box>

      {filteredBooks?.map((book, index) => (
        <SearchBook key={`${book.id}-${index}`} book={book} />
      ))}
    </Box>
  )
}

export default SearchBookPage