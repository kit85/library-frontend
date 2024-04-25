import { Autocomplete, Box, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { BookType } from '../types';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const [book, setBook] = useState<BookType[]>([]);
  const [input, setInput] = useState<string>('');
  const navigate = useNavigate();
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
     
      } catch (error) {
        console.log("Error fetching data:", error)
      }
    };
    fetchBooks();
  }, []);



  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    if (input.trim() !== "") {

      navigate(`/search?q=${input}`);
    }
  };

  const handleAutocompleteChange = (event: any, value: any) => {
    if (value && typeof value !== "string") {
      // If the selected value is a book, navigate to its details page
      navigate(`/checkout/${value.category}/${value.id}`);
    } else {
      // If the selected value is a string, navigate to a search page with typed letters
      navigate(`/search?q=${input}`);
    }
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "row", flex: 1 }}>
      <Autocomplete
        size='small'
        id="grouped-demo"
        freeSolo
        disableClearable
        options={input.trim().length > 1 ?  book || []: []}
        getOptionLabel={(book: string | BookType) => {
          if (typeof book === 'string') {
            return book;
          } else {
            return book.title;
          }
        }}
        sx={{ width: "60%", ml: 2, bgcolor: "white", color: "black", borderRadius: 1 }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        noOptionsText="No Available Books"
        renderOption={(props, book) => (
          <Box key={book.id} gap={2} component="li" {...props}>
            <Box component="img" src={`data:image/png;base64,${book.img}`} alt="book" sx={{ width: "10%", height: "auto" }} />
            <Typography>{book.title}</Typography>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            placeholder='Search Books'
            {...params}
            InputProps={{
              ...params.InputProps,
              "aria-label": "search",
              endAdornment: <Search onClick={handleSearch} sx={{ color: "black" }} />,
            }}
            onChange={handleInputChange}
          />
        )}
        onChange={handleAutocompleteChange}
      />
    </Box>

  )
}

export default SearchBar


