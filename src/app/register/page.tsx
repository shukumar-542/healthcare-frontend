import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import assets from '@/assets'
import Link from 'next/link';
const RegisterPage = () => {
    return (
        <Container>
            <Stack sx={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',


            }}>
                <Stack sx={{
                    maxWidth: 600,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: "center",
                    borderRadius: '8px',
                    boxShadow: 1,
                    paddingY: 2
                }}>

                   
                    <Box sx={{
                        width: '100%',
                        padding: "16px 25px"
                    }}>

                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <TextField id="outlined-basic" size='small' fullWidth={true} label="name" variant="outlined" />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="outlined-basic" size='small' fullWidth={true} label="email" variant="outlined" type='email' />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="outlined-basic" size='small' fullWidth={true} label="password" variant="outlined" type='password' />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="outlined-basic" size='small' fullWidth={true} label="contact" variant="outlined" type='text' />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="outlined-basic" size='small' fullWidth={true} label="address" variant="outlined" type='text' />
                            </Grid>
                        </Grid>

                        <Button fullWidth={true} sx={{
                            marginTop: 2
                        }} >Submit</Button>
                        <Typography sx={{
                            textAlign: 'center'
                            ,
                            marginTop : 1
                        }}>Do you already have an account ? <Link href='/login'>Login</Link></Typography>
                    </Box>

                </Stack>



            </Stack>
        </Container>
    );
};

export default RegisterPage;