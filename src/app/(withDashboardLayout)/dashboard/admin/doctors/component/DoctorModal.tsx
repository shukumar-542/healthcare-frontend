import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import PHFullScreenModal from "@/components/shared/PHModal/PHFullScreenModal";
import { Gender } from "@/types";
import { Button, Grid } from "@mui/material";

type modalPropsTypes = {
    setOpen :  React.Dispatch<React.SetStateAction<boolean>>,
    open : boolean,
}

const defaultsValues = {
    doctor :{
        apointmentFee : 0,
        qualification : '',
        currentWorkingPlace : "",
        designation : "",
        workingPlace  :""
    },
    password : ""
}
const handleSubmit = ()=>{

}

const DoctorModal = ({open, setOpen} :modalPropsTypes) => {
    return (
        <PHFullScreenModal open={open} setOpen={setOpen} title='Create Doctor' >
            <PHForm onSubmit={handleSubmit} defaultValues={defaultsValues}>
            <Grid container spacing={2} sx={{my : 2}}>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.name' fullWidth={true} label='Name' sx={{mb : 2}} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.email' fullWidth={true} label='Email' sx={{mb : 2}} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='password' fullWidth={true} label='Password' />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.contactNumber' fullWidth={true} label='contactNumber' />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.address' fullWidth={true} label='Address' />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.registrationNumber' fullWidth={true} label='RegistrationNumber' />
                    </Grid>
                    
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.experience' fullWidth={true} label='Experience' sx={{mb : 2}} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHSelectField items={Gender} name='doctor.gender' fullWidth={true} label='Gender' sx={{mb : 2}} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.apointmentFee' fullWidth={true} label='Appointment Fee' sx={{mb : 2}} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.qualification' fullWidth={true} label='Qualification' sx={{mb : 2}} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.currentWorkingPlace' fullWidth={true} label='Qualification' sx={{mb : 2}} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.designation' fullWidth={true} label='Designation' sx={{mb : 2}} />
                    </Grid>
                    
                    
                </Grid>
                <Button type='submit' sx={{ mt: 1 }}>Submit</Button>
            </PHForm>
        </PHFullScreenModal>
    );
};

export default DoctorModal;