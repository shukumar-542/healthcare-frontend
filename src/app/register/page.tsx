
"use client"
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import assets from '@/assets'
import Link from 'next/link';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { modifyPayload } from '@/utils/modifyPayload';
import { registerPatient } from '@/Services/actions/RegisterPatients';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { userLogin } from '@/Services/actions/UserLogin';
import { storeUserInfo } from '@/Services/auth.service';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';


const RegisterPage = () => {
    const router = useRouter()
    

    const handleRegister = async(data : FieldValues) => {
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

                        <PHForm onSubmit={handleRegister}>
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <PHInput  name ='patient.name' required={true} fullWidth={true} label="name"  />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput  name='patient.email' required={true}  fullWidth={true} label="email" type='email' />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput  name='password' required={true} fullWidth={true} label="password"  type='password' />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput required={true}  name= 'patient.contactNumber' size='small' fullWidth={true} label="contact" type='text' />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput required={true} name='patient.address' fullWidth={true} label="address"   />
                                </Grid>
                            </Grid>

                            <Button type='submit' fullWidth={true} sx={{
                                marginTop: 2
                            }} >Submit</Button>
                        </PHForm>
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