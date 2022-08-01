import React from 'react'
import { Box } from '@mui/material'
import { AuthForm } from '../components/layout/AuthForm'

const Login = () => {
    return (
        <div style={{
            backgroundImage: "url('https://images.tokopedia.net/img/KRMmCm/2022/5/20/fa2e7b00-3db8-48dc-b1c8-c7f926338793.jpg')",
            objectPosition: 'center',
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            margin: 0,
            padding: 0
        }}>
            <Box sx={{
                position: 'relative',
                backgroundColor: '#000',
                left: 0,
                top: 0,
                opacity: '40%',
                zIndex: 80,
                height: '100vh',
            }} />
            <AuthForm note='login' />
        </div>
    )
}

export default Login
