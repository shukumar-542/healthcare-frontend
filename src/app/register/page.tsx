
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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const patientValidationSchema = z.object({
    name : z.string().min(1,'Please Enter Your Name'),
    email : z.string().email('Please Enter Email Address'),
    contactNumber : z.string().regex(/^\d{11}$/,"Please Provide a valid phone number"),
     address : z.string().min(1,'Please Enter Your Address')
})
export const validationSchema = z.object({
    password :  z.string().min(6 , 'Password must be 6 character'),
    patient  : patientValidationSchema
})

export const defaultValues = {
    password : '', patient :{
        name : '', email : '', contactNumber : '', address : ''
    }
}
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
                router.push('/dashboard')
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

                        <PHForm onSubmit={handleRegister} resolver ={ zodResolver(validationSchema)} defaultValues={defaultValues} >
                            <Grid container spacing={2}>
                                <Grid item md={12}>
                                    <PHInput  name ='patient.name'  fullWidth={true} label="name"  />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput  name='patient.email'   fullWidth={true} label="email" type='email' />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput  name='password' fullWidth={true} label="password"  type='password' />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput  name= 'patient.contactNumber' size='small' fullWidth={true} label="contact" type='text' />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput  name='patient.address' fullWidth={true} label="address"   />
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