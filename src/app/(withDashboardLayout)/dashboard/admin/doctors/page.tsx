"use client"
import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import DoctorModal from './component/DoctorModal';

const DoctorsPage = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Stack direction='row' justifyContent='space-between' alignItems='center' >
                <Button onClick={()=> setOpen(true)}>Create Doctors</Button>
                <DoctorModal open={open} setOpen={setOpen} />
                <TextField size='small' placeholder='Search Specialties' />
            </Stack>
        </Box>
    );
};

export default DoctorsPage;