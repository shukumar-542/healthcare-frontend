
"use client"
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import assets from '@/assets'
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form"
import { modifyPayload } from '@/utils/modifyPayload';
import { registerPatient } from '@/Services/actions/RegisterPatients';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { userLogin } from '@/Services/actions/UserLogin';
import { storeUserInfo } from '@/Services/auth.service';

type Inputs = {
    name: string
    email: string
    password: string
    contactNumber: string
    address: string
}

type PatientData = {
    password : string,
    patient : Inputs
}

const RegisterPage = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<PatientData>()

    const onSubmit: SubmitHandler<PatientData> = async(data) => {
       const newData =  modifyPayload(data);
        
    try {
       const res = await registerPatient(newData)
       if(res.success){
        toast.success(res?.message)
        const result = await userLogin({password : data.password, email: data.patient.email})
            if(result?.data?.accessToken){
                storeUserInfo(result?.data?.accessToken)
                router.push('/')
            }
       }
    } catch (error : any) {
        console.log(error.message);
    }
    }
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
                    <Image src={assets.svgs.logo} width={50} height={50} alt='logo' />
                    <Typography component='h6' fontWeight={600}>Patient Register</Typography>

                    <Box sx={{
                        width: '100%',
                        padding: "16px 25px"
                    }}>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <TextField id="outlined-basic" {...register('patient.name')} size='small' fullWidth={true} label="name" variant="outlined" />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField id="outlined-basic" {...register('patient.email')} size='small' fullWidth={true} label="email" variant="outlined" type='email' />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField id="outlined-basic" {...register('password')} size='small' fullWidth={true} label="password" variant="outlined" type='password' />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField id="outlined-basic" {...register('patient.contactNumber')} size='small' fullWidth={true} label="contact" variant="outlined" type='text' />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField id="outlined-basic" {...register('patient.address')} size='small' fullWidth={true} label="address" variant="outlined" type='text' />
                                </Grid>
                            </Grid>

                            <Button type='submit' fullWidth={true} sx={{
                                marginTop: 2
                            }} >Submit</Button>
                        </form>
                        <Typography sx={{
                            textAlign: 'center'
                            ,
                            marginTop: 1
                        }}>Do you already have an account ? <Link href='/login'>Login</Link></Typography>
                    </Box>

                </Stack>



            </Stack>
        </Container>
    );
};

export default RegisterPage;