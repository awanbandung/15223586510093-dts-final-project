import React from 'react'
//import { Box } from '@mui/material'
import { AuthForm } from '../containers/AuthForm'

//import styles from "./Login.module.css";

const Login = () => {
    return (
        <div>
            {/* <Box sx={{
                position: 'relative',
                backgroundColor: '#000',
                left: 0,
                top: 0,
                opacity: '40%',
                zIndex: 80,
                height: '100vh',
            }} /> */}
            <AuthForm note='login' />
        </div>
    )
}

export default Login
