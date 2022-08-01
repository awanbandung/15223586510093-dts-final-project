import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import { Stack } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {
    auth,
    login,
    register,
} from "../apis/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthForm = (props) => {
    const navigate = useNavigate();
    const [user, isLoading] = useAuthState(auth);
    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });

    const emailHandler = (event) => {
        setCredential({
            ...credential,
            email: event.target.value,
        });
    };

    const passwordHandler = (event) => {
        setCredential({
            ...credential,
            password: event.target.value,
        });
    };

    const loginHandler = () => {
        login(credential.email, credential.password);
    };

    const registerHandler = () => {
        register(credential.email, credential.password);
    };

    const authOnClickHandler = () => {
        if (props.note === "login") {
            loginHandler();
        } else {
            registerHandler();
        }
    };


    useEffect(
        () => {
            if (user) {
                navigate("/");
            }
        },
        [user, isLoading, navigate]
    );

    return (
        <Container
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '30rem',
                height: '30rem',
                boxSizing: 'border-box',
                background: '#1c1e22',
                borderRadius: '10px',
                zIndex: 999,
                margin: '0 auto',
                padding: '15px 4px'

            }}
        >
            <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: '800' }}>{props.note === 'login' ? 'Login' : 'Register'}</h2>
            <Box
                component='form'
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    marginTop: '30px',
                    flexDirection: 'column'
                }}
            >
                <Stack direction='vertical' gap={4}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        sx={{ input: { color: '#fff' } }}
                        fullWidth
                        focused
                        value={credential.email}
                        onChange={emailHandler} />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{ input: { color: '#fff' } }}
                        fullWidth
                        focused
                        value={credential.password}
                        onChange={passwordHandler} />
                    <Button variant="contained" color='primary' onClick={authOnClickHandler}>{props.note === 'login' ? 'Login' : 'Register'}</Button>
                </Stack>

                {props.note === 'login' ? <Typography variant='body2' sx={{ color: '#fff', marginTop: '20px', fontSize: '1em' }}>Dont have any account? <Link to='/register' style={{ color: '#1976d2' }}>Register</Link></Typography> : <Typography variant='body2' sx={{ color: '#fff', marginTop: '20px', fontSize: '1em' }}>Already have an account? <Link to='/login' style={{ color: '#fff' }}>Login Now</Link></Typography>}
            </Box>
        </Container >
    )
}
