"use client"
import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SpecialtiesModal from './SpecialtiesModal/SpecialtiesModal';

const SpecialTiesPage = () => {
    const [isOpen, setIsOpen] =useState(false);
    return (
        <Box>
            <Stack direction='row' alignItems='center' justifyContent='space-between' >
                <Button onClick={()=> setIsOpen(true)}>Create specialty</Button>
                <SpecialtiesModal isOpen={isOpen} setOpen={setIsOpen}  />
                <TextField size='small' placeholder='Search Specialties' />
            </Stack>
        </Box>
    );
};

export default SpecialTiesPage;