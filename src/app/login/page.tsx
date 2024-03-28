import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import assets from "@/assets"
import Image from 'next/image';
import Link from 'next/link';
const LoginPage = () => {
    return (
        <Container>
            <Stack sx={{
                justifyContent: 'center', alignItems: 'center',
                height : '100vh'
            }}>
                <Stack sx={{
                    width : 600,
                    maxWidth : '100%',
                    alignItems:'center',
                    justifyContent:'center',
                    boxShadow :1,
                    borderRadius : 2,
                    padding: 2
                }}>
                    <Image src={assets.svgs.logo} width={50} height={50} alt='logo' />
                    <Typography component='h6' fontWeight={600}>Patient Register</Typography>

                    <Grid container spacing={2} sx={{
                        marginTop : 4
                    }}>
                            
                            <Grid item md={6}>
                                <TextField id="outlined-basic" size='small' fullWidth={true} label="email" variant="outlined" type='email' />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="outlined-basic" size='small' fullWidth={true} label="password" variant="outlined" type='password' />
                            </Grid>
                           
                        </Grid>

                        <Button fullWidth={true} sx={{
                            marginTop: 2
                        }} >Login</Button>
                        <Typography sx={{
                            textAlign: 'center'
                            ,
                            marginTop : 1
                        }}>Don&apos;t have an account? <Link href='/register'>Create an account</Link></Typography>
                </Stack>
            </Stack>
        </Container>
    );
};

export default LoginPage;