import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BookCategoryRoute = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        position: "sticky",
        
        bgcolor: "white",
        width: "100%",
      }}
    >
      <Typography
        component={Link}
        to="/bookcategorypage"
        sx={{ fontWeight: "bold", textDecoration: "none" }}
      >
        Programming
      </Typography>
      <Box sx={{ marginRight: "20px" }}></Box>
      <Typography
        component={Link}
        to="/bookcategorypage"
        sx={{ fontWeight: "bold", textDecoration: "none" }}
      >
        fanasty
      </Typography>
    </Box>
  );
};

export default BookCategoryRoute;
