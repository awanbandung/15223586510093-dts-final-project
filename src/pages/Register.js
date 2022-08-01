import React from 'react'
//import { Box } from '@mui/material'
import { AuthForm } from '../containers/AuthForm'

export const Register = () => {
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
            <AuthForm note='register' />
        </div>
    )
}
