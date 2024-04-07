import PHDatePicker from '@/components/Forms/PHDatePicker';
import PHForm from '@/components/Forms/PHForm';
import PHTimePicker from '@/components/Forms/PHTimePicker';
import PHModal from '@/components/shared/PHModal/PHModal';
import { useCreateScheduledMutation } from '@/redux/api/scheduledApi';
import { dateFormatter } from '@/utils/dateFormatter';
import { timeFormatter } from '@/utils/timeFormatter';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

export type TProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ScheduledModal = ({ open, setOpen }: TProps) => {

    const [createScheduled] =useCreateScheduledMutation()
    const handleSubmit = async (value: FieldValues) => {
        
        
        value.startDate = dateFormatter(value.startDate)
        value.endDate = dateFormatter(value.endDate)
        value.startTime = timeFormatter(value.startTime)
        value.endTime = timeFormatter(value.endTime)

        try {
            const res = await createScheduled(value).unwrap()
            if (res?.length) {
                toast.success("Schedules created successfully!");
                setOpen(false);
              };
            
            
        } catch (error :any) {
            console.error(error.message);
        }

    }
    return (
        <PHModal title='Create Scheduled' open={open} setOpen={setOpen}>
            <PHForm onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ width: '400px' }} >
                    <Grid item md={12}  >
                        <PHDatePicker name='startDate' label='Start Date' />

                    </Grid>
                    <Grid item md={12}  >
                        <PHDatePicker name='endDate' label='End Date' />

                    </Grid>
                    <Grid item md={6}  >
                        <PHTimePicker name='startTime' label='Start Time' />

                    </Grid>
                    <Grid item md={6}  >
                        <PHTimePicker name='endTime' label='End Time' />

                    </Grid>
                </Grid>
                <Button type='submit' sx={{ mt: 1 }}>Create</Button>
            </PHForm>
        </PHModal>
    );
};

export default ScheduledModal;