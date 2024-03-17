import { Box, Button, Card, TextField, Typography, makeStyles } from '@mui/material'
import { log } from 'console'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export interface LoginType {
    email: string,
    password: String
}

const Login = () => {
   
    const navigate=useNavigate()
    const [formData, setFormData] = useState<LoginType>({
        email: '',
        password: '',
    });

    const sendLogin = async () => {
        
        try {
            const reponse =await fetch('http://localhost:8080/api/v1/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            });
            if(!reponse.ok){
                throw new Error("Unsucessful")
            }
            console.log("sucessful")
            navigate("/search")
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        console.log(formData)
    };

    const validateInput =()=>{
        if(formData.email === ""){
            console.log("you must enter username or password");
        }else if(formData.password===""){
            console.log("you must enter usermane or password")
        }else {
            sendLogin();
        }  
        
    }

    

    return (
        <Box height="82vh" display="flex" justifyContent="center" alignItems="center">
            <Box display="flex" flexDirection="column" maxWidth={400} padding={3} boxShadow="5px 5px 10px #ccc"
                sx={{
                    ":hover": {
                        boxShadow: "10px 10px 20px #ccc",
                    }
                }} >
                <Typography variant='h2' padding={3} textAlign="center" >Login</Typography>
                <TextField
                 margin="normal" 
                 type='text' 
                 variant='outlined' 
                 placeholder='Email'
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                />
                <TextField 
                margin="normal" 
                type="password" 
                variant='outlined' 
                placeholder='Password' 
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                />
                <Button onClick={validateInput} sx={{ marginTop: 3, borderRadius: 3 }} variant='contained'>Login</Button>
                <Typography sx={{ marginTop: 3, borderRadius: 3, textDecoration: "none", textAlign: "center" }} component={Link} to="/signup">Change to Signup</Typography>
            </Box>
        </Box>
    )
}

export default Login