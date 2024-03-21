import { Box, Grid, Card, Typography, CardMedia, CardContent, CardActionArea, Autocomplete, TextField, ListSubheader } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchBook from '../components/SearchBook'
import { BookType } from '../types';
import { useNavigate } from 'react-router-dom';


export const SearchBookPage = () => {
  const [book, setBook] = useState<BookType[]>([]);
  const [isLoading, seIsLoading] = useState(true);
  const [httpError, setHttpError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchUrl, setSeacrhUrl] = useState<string>("");
  const navigate=useNavigate();
  
  const baseUrl = "http://localhost:8080/api/v1/book"
  const url = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`
  const searh = `search?title=${searchTerm}`



  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${baseUrl}`);
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

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
};

  const filteredBooks = book.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredBooks)

  const sortedBooks = filteredBooks.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
  console.log(sortedBooks);



  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "20px" }}>
        <Autocomplete
          id="grouped-demo"
          options={book}
         
          groupBy={(book) => book.title.charAt(0).toUpperCase()}
          getOptionLabel={(book) => book.title}
          sx={{ width: 300 }}
          isOptionEqualToValue={(option, value) =>
            option.title === value.title
          }
          noOptionsText={"No Available Books"}
          renderOption={(props, book) =>(
            <Box component="li" {...props} key={book.id}>
              {book.title}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={handleSearchTermChange}
              label="Search Book"
            />
          )}
          renderGroup={(params) => ( 
            <div key={params.key}>
              <ListSubheader>{params.group}</ListSubheader>
              {params.children}
            </div>
          )}
          onChange={(event, value) => {
            if (value && typeof value !== "string") {
              navigate(`/${value.category}/${value.id}`);
            }
          }}
        />

      </Box>


      {filteredBooks.map((book, index) => (
        <SearchBook  key={`${book.id}-${index}`} book={book}  />
      ))}
    </Box>
  )
}

export default SearchBookPage