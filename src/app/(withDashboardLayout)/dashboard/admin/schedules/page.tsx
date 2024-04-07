"use client"
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import ScheduledModal from './components/ScheduledModal';

const ScheduledPage = () => {
    const [open, setOpen] =  useState<boolean>(false)
    return (
        <Box>
            <Button onClick={()=> setOpen(true)} >Create Scheduled</Button>
            <ScheduledModal open={open} setOpen={setOpen} />
        </Box>
    );
};

export default ScheduledPage;