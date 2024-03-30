"use client"
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import assets from "@/assets"
import Image from 'next/image';
import Link from 'next/link';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { userLogin } from '@/Services/actions/UserLogin';
import { storeUserInfo } from '@/Services/auth.service';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';

const LoginPage = () => {
    const router = useRouter()

    const handleLogin = async (data: FieldValues) => {
        try {
            const res = await userLogin(data)
            if (res?.data?.accessToken) {
                storeUserInfo(res?.data?.accessToken)
                toast.success(res?.message)
                router.push('/')
            }
        } catch (error: any) {
            console.log(error.message);
        }
    }
    return (
        <Container>
            <Stack sx={{
                justifyContent: 'center', alignItems: 'center',
                height: '100vh'
            }}>
                <Stack sx={{
                    width: 600,
                    maxWidth: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 1,
                    borderRadius: 2,
                    padding: 2
                }}>
                    <Image src={assets.svgs.logo} width={50} height={50} alt='logo' />
                    <Typography component='h6' fontWeight={600}>Patient Register</Typography>
                    <PHForm onSubmit={handleLogin}>

                        <Grid container spacing={2} sx={{
                            marginTop: 4
                        }}>
                            <Grid item md={6}>
                                <PHInput fullWidth={true} label="email" name='email' type='email' />
                            </Grid>
                            <Grid item md={6}>
                                <PHInput fullWidth={true} label="password" name='password' type='password' />
                            </Grid>

                        </Grid>

                        <Button type='submit' fullWidth={true} sx={{
                            marginTop: 2
                        }} >Login</Button>
                    </PHForm>
                    <Typography sx={{
                        textAlign: 'center'
                        ,
                        marginTop: 1
                    }}>Don&apos;t have an account? <Link href='/register'>Create an account</Link></Typography>
                </Stack>
            </Stack>
        </Container >
    );
};

export default LoginPage;