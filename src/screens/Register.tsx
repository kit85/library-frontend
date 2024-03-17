import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


export interface registerType {
  username: string,
  lastname: string,
  email: string,
  password: String
}

const Register = () => {
  
  const navigate=useNavigate()
  const [formData, setFormData] = useState<registerType>({
    username: '',
    lastname: '',
    email: '',
    password: ''
  });
  const sendRegister = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/user/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Unsuccessful");
      }
      console.log("Register successful");
      navigate("/search")
    } catch (error) {
      console.error(error);
      console.log(error, "error")
    }
  };
 

  const validateInput = () => {
    if (formData.username === "" || formData.lastname === "" || formData.email === "" || formData.password === "") {
      console.log("You must enter username, lastname, email, and password");
      
    } else {
      sendRegister();
    }
  };

  return (
    <Box height="82vh" display="flex" justifyContent="center" alignItems="center">
      <Box display="flex" flexDirection="column" maxWidth={400} padding={3} boxShadow="5px 5px 10px #ccc"
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          }
        }} >
        <Typography variant='h2' padding={3} textAlign="center" >Signup</Typography>
        <TextField
          margin='normal'
          type='text' variant='outlined'
          placeholder='Username'
          value={formData.username}
          onChange={(e)=>setFormData({...formData, username:e.target.value})}
          required
        />
        <TextField
          margin="normal"
          type='text'
          variant='outlined'
          placeholder='Lastname'
          value={formData.lastname}
          onChange={(e)=>setFormData({...formData, lastname:e.target.value})}
          required
        />

        <TextField
          margin="normal"
          type='text'
          variant='outlined'
          placeholder='Email'
          value={formData.email}
          onChange={(e)=>setFormData({...formData, email:e.target.value})}
          required
        />
        <TextField
          margin="normal"
          type="password"
          variant='outlined'
          placeholder='Password'
          value={formData.password}
          onChange={(e)=>setFormData({...formData, password:e.target.value})}
          required
        />
        <Button onClick={validateInput} sx={{ marginTop: 3, borderRadius: 3 }} variant='contained'>Signup</Button>
        <Typography sx={{ marginTop: 3, borderRadius: 3, textDecoration: "none", textAlign: "center" }} component={Link} to="/login">Change to Login</Typography>
      </Box>
    </Box>
  )
}

export default Register