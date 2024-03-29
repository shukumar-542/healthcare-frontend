"use client"
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import assets from "@/assets"
import Image from 'next/image';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userLogin } from '@/Services/actions/UserLogin';
import { storeUserInfo } from '@/Services/auth.service';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
export type FormValues = {
    email: string,
    password: string
}
const LoginPage = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const res = await userLogin(data)
            if(res?.data?.accessToken){
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
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <Grid container spacing={2} sx={{
                        marginTop: 4
                    }}>
                            <Grid item md={6}>
                                <TextField id="outlined-basic" size='small' fullWidth={true} label="email" {...register('email')} variant="outlined" type='email' />
                            </Grid>
                            <Grid item md={6}>
                                <TextField id="outlined-basic" size='small' fullWidth={true} {...register('password')} label="password" variant="outlined" type='password' />
                            </Grid>

                    </Grid>

                    <Button type='submit' fullWidth={true} sx={{
                        marginTop: 2
                    }} >Login</Button>
                </form>
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