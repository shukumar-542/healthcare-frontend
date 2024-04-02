"use client"
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SpecialtiesModal from './SpecialtiesModal/SpecialtiesModal';
import { useDeleteSpecialtiesMutation, useGetAllSpecialtiesQuery } from '@/redux/api/specialtiesApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'sonner';

const SpecialTiesPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data, isLoading } = useGetAllSpecialtiesQuery({})
    const [deleteSpecialties] =  useDeleteSpecialtiesMutation()
    const handleDelete =async(id : string)=>{
        
        try {
           const res = await deleteSpecialties(id).unwrap()
           if(res?.id){
            toast.success('specialties deleted')
           } 
           console.log(res);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', width: 400 },
        {
            field: 'icon', headerName: 'Icon', flex:1, renderCell: ({ row }) => {
                return <Box >
                    <Image src={row.icon} width={30} height={30} alt='image' />
                </Box>
            }
        },
        {
            field: 'action', headerName: 'Action', flex : 1, headerAlign : 'center',align:'center', renderCell: ({ row }) => {
                return <Box >
                    <IconButton aria-label="delete" onClick={()=> handleDelete(row.id)} >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            }
        }

    ];
    // console.log(data);
    if (isLoading) {
        return <h1>Loading..</h1>
    }
    return (
        <Box>
            <Stack direction='row' alignItems='center' justifyContent='space-between' >
                <Button onClick={() => setIsOpen(true)}>Create specialty</Button>
                <SpecialtiesModal isOpen={isOpen} setOpen={setIsOpen} />
                <TextField size='small' placeholder='Search Specialties' />
            </Stack>
            <Box>
                <h1>All Specialties</h1>

                <DataGrid
                    rows={data}
                    columns={columns}


                />
            </Box>
        </Box>
    );
};

export default SpecialTiesPage;