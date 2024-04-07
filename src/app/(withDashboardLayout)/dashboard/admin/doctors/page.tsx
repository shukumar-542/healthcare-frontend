"use client"
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import DoctorModal from './component/DoctorModal';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteDoctorMutation, useGetAllDoctorsQuery } from '@/redux/api/doctorApi';
import { useDebounced } from '@/redux/hooks';
import { toast } from 'sonner';


const DoctorsPage = () => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [deleteDoctor] = useDeleteDoctorMutation()
    const query: Record<string, any> = {};

    const debounced = useDebounced({
        searchQuery: searchTerm,
        delay: 600
    })
    if (!!debounced) {

        query['searchTerm'] = searchTerm;
    }
    const { data, isLoading } = useGetAllDoctorsQuery({ ...query })
    const doctors = data?.doctors;
    const meta = data?.meta;
    const handleDelete = async (id: string) => {
        try {

            const res = await deleteDoctor(id).unwrap();
            if(res.id){
                toast.success('Doctor delete successfully')
            }

        } catch (error: any) {
            console.log(error.message);
        }
    }
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 400, flex: 1 },
        { field: 'email', headerName: 'Email', width: 400, flex: 1 },
        { field: 'gender', headerName: 'Gender', width: 400, flex: 1 },
        { field: 'apiontmentFee', headerName: 'Appointment Fee', width: 400, flex: 1 },
        { field: 'contactNumber', headerName: 'Contact Number', width: 400, flex: 1 },

        {
            field: 'action', headerName: 'Action', flex: 1, headerAlign: 'center', align: 'center', renderCell: ({ row }) => {
                return <Box >
                    <IconButton aria-label="delete" onClick={() => handleDelete(row.id)} >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            }
        }

    ];
    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <Box>
            <Stack direction='row' justifyContent='space-between' alignItems='center' >
                <Button onClick={() => setOpen(true)}>Create Doctors</Button>
                <DoctorModal open={open} setOpen={setOpen} />
                <TextField onChange={(e) => setSearchTerm(e.target.value)} size='small' placeholder='Search Specialties' />
            </Stack>

            <Box>
                <h1>All Doctors</h1>

                <DataGrid
                    rows={doctors}
                    columns={columns}


                />
            </Box>
        </Box>
    );
};

export default DoctorsPage;