import PHModal from "@/components/shared/PHModal/PHModal";
import { TextField } from "@mui/material";


type ModalProsType = {
    isOpen : boolean,
    setOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const SpecialtiesModal = ({isOpen , setOpen} :  ModalProsType) => {
    return (
        <PHModal open={isOpen} setOpen={setOpen} title="Create Specialties">
            <TextField/>
        </PHModal>
    );
};

export default SpecialtiesModal;