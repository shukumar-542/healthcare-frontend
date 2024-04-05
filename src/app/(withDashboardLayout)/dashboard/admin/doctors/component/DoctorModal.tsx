import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import PHFullScreenModal from "@/components/shared/PHModal/PHFullScreenModal";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type modalPropsTypes = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean,
}



const DoctorModal = ({ open, setOpen }: modalPropsTypes) => {
    const [createDoctor] = useCreateDoctorMutation()

    const handleSubmit = async (data: FieldValues) => {
        data.doctor.apointmentFee = Number(data.doctor.apointmentFee)
        data.doctor.experience = Number(data.doctor.experience)
        const value = modifyPayload(data)
        try {
            const res = await createDoctor(value).unwrap();
            console.log(res);
            if(res.id){
                toast.success('doctor create successfully')
                setOpen(false)
            }
        } catch (error: any) {
            console.log(error.message);
        }
    }

    const defaultValues = {
        doctor: {
            email: "",
            name: "",
            contactNumber: "",
            address: "",
            registrationNumber: "",
            gender: "",
            experience: 0,
            apointmentFee: 0,
            qualification: "",
            currentWorkingPlace: "",
            designation: "",
            profilePhoto: "",
        },
        password: "",
    };
    return (
        <PHFullScreenModal open={open} setOpen={setOpen} title='Create Doctor' >
            <PHForm onSubmit={handleSubmit} defaultValues={defaultValues}>
                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.name' fullWidth={true} label='Name' sx={{ mb: 2 }} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.email' fullWidth={true} label='Email' sx={{ mb: 2 }} />
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
                        <PHInput name='doctor.experience' fullWidth={true} label='Experience' sx={{ mb: 2 }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHSelectField
                            items={Gender}
                            name="doctor.gender"
                            label="Gender"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.apointmentFee' fullWidth={true} label='Appointment Fee' sx={{ mb: 2 }} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.qualification' fullWidth={true} label='Qualification' sx={{ mb: 2 }} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.currentWorkingPlace' fullWidth={true} label='currentWorkingPlace' sx={{ mb: 2 }} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={4}>
                        <PHInput name='doctor.designation' fullWidth={true} label='Designation' sx={{ mb: 2 }} />
                    </Grid>


                </Grid>
                <Button type='submit' sx={{ mt: 1 }}>Submit</Button>
            </PHForm>
        </PHFullScreenModal>
    );
};

export default DoctorModal;