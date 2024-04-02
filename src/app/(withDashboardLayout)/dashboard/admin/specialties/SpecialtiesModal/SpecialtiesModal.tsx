import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/shared/PHModal/PHModal";
import { useCreateSpecialtiesMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";


type ModalProsType = {
    isOpen : boolean,
    setOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const SpecialtiesModal = ({isOpen , setOpen} :  ModalProsType) => {
    const [createSpecialties] =  useCreateSpecialtiesMutation()
    const handleFormSubmit = async(value : FieldValues)=>{
        const data  = modifyPayload(value)
        
        try {
            const res = await createSpecialties(data).unwrap()
            console.log(res);
        } catch (error : any) {
            console.log(error.message);
        }
    }
    return (
        <PHModal open={isOpen} setOpen={setOpen} title="Create Specialties">
            <PHForm onSubmit={handleFormSubmit} >
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <PHInput name='title' label='title' />
                    </Grid>
                    <Grid item md={6}>
                        <PHFileUploader name='file' label='upload file' />
                    </Grid>
                </Grid>
                <Button type='submit' sx={{ mt: 1 }}>Submit</Button>
            </PHForm>
        </PHModal>
    );
};

export default SpecialtiesModal;