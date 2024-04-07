import PHDatePicker from '@/components/Forms/PHDatePicker';
import PHForm from '@/components/Forms/PHForm';
import PHModal from '@/components/shared/PHModal/PHModal';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

export type TProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ScheduledModal = ({ open, setOpen }: TProps) => {
    const handleSubmit = async(value : FieldValues) => {
        console.log(value);
    }
    return (
        <PHModal title='Create Scheduled' open={open} setOpen={setOpen}>
            <PHForm onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={12}  >
                        <PHDatePicker name='startDate' label='Start Date' />

                    </Grid>
                    <Grid item md={12}  >
                        <PHDatePicker name='endDate' label='End Date'  />

                    </Grid>
                </Grid>
                <Button type='submit'>Create</Button>
            </PHForm>
        </PHModal>
    );
};

export default ScheduledModal;