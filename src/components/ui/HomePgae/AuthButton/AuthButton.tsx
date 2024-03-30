"use client"
import { isLoggedIn, removeUser } from '@/Services/auth.service';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from "next/navigation";

import React from 'react';
const AuthButton = () => {
    const router = useRouter()
    const isLogged = isLoggedIn()
    const handleLogOut = ()=>{
        removeUser()
        router.refresh()
    }
    return (
        <>
          
          {isLogged ? (<Button onClick={handleLogOut}  color='error' >Logout</Button>)
            : (<Button  href="/login" component={Link} >Login</Button>)}  
        </>
    );
};

export default AuthButton;