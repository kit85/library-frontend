import React, { ReactNode } from 'react'
import Button, {ButtonProps} from '@mui/material/Button'
import { Link } from 'react-router-dom'


interface CustomButtonProps extends ButtonProps { 
    children:ReactNode;
    onClick?: ()=> void;
    sx?: React.CSSProperties;
   
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick,sx }) => {
    return (
        <Button variant='contained' onClick={onClick} sx={{...(sx ?? {}),color:"white", border:"0.5px solid white", background:"#1976d2", borderRadius:"3px", marginLeft:"auto"}} >
            {children}
        </Button>
    )
}

export default CustomButton;