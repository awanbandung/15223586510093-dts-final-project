import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import { Stack } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {
    auth,
    login,
    register,
} from "../../apis/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthForm = (props) => {
    const navigate = useNavigate();

    // di sini kita akan menggunakan hooks useAuthState
    // useAuthState ini menerima 2 parameter:
    // parameter 1: auth (yang kita buat dan export dari firebase)
    // parameter 2 (optional): options (dalam bentuk object)
    //    digunakan apabila ingin menggunakan hooks dengan lebih detail (melihat perubahan user)
    //    (Pada pembelajaran ini tidak digunakan)

    // Mengembalikan 3 data (dalam array)
    // user: akan mengembalikan auth.User apabila ada yang log in, dan null bila tidak ada
    // loading: boolean yang digunakan sebagai indikator apakah firebasenya sedang menunggu login
    // error: bila ada error yang diberikan
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
        // console.log("Login");
        // navigate("/");

        // Kita di sini tidak menggunakan navigate ke login lagi,
        // karena pada firebase, ketika selesai login,
        // maka auth statenya akan otomatis berubah (hooks useAuthState, data user)
        login(credential.email, credential.password);
    };

    const registerHandler = () => {
        // console.log("Register");
        // navigate("/login");

        // Kita di sini tidak menggunakan navigate ke login lagi, karena pada Firebase
        // Ketika selesai register akan otomatis login juga
        // dan auth statenya akan otomatis berubah (hooks useAuthState, data user)
        register(credential.email, credential.password);
    };

    const authOnClickHandler = () => {
        if (props.note === "login") {
            loginHandler();
        } else {
            registerHandler();
        }
    };

    // Lalu sekarang bagaimana kita track orang yang sedang login, dan apabila ada yang login
    // kita pindahkan ke halaman utama?

    // Kita gunakan.... useEffect !
    useEffect(
        () => {
            // Lalu apabila usernya ditemukan (ada / tidak null)
            // Maka akan kita navigasikan ke halaman HomePage
            if (user) {
                navigate("/");
            }
        },
        // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
        [user, isLoading, navigate]
    );

    return (
        <Container
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '20rem',
                height: '25rem',
                boxSizing: 'border-box',
                background: 'rgba(0,0,0,0.5)',
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
                    <Button variant="contained" color='primary' onClick={authOnClickHandler}>{props.note === 'login' ? 'Sign In' : 'Sign Up'}</Button>
                </Stack>

                {props.note === 'login' ? <Typography variant='body2' sx={{ color: '#fff', marginTop: '40px' }}>Dont have any account? <Link to='/register' style={{ color: '#fff' }}>Sign Up Now</Link></Typography> : <Typography variant='body2' sx={{ color: '#fff', marginTop: '40px' }}>Already have an account? <Link to='/login' style={{ color: '#fff' }}>Sign In Now</Link></Typography>}
            </Box>
        </Container >
    )
}
