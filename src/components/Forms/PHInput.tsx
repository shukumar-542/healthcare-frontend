import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
    name : string,
    label?: string,
    type? : string,
    size ?: 'small' | "medium",
    fullWidth ?: boolean
}

const PHInput = ({name,label,type='text',size='small',fullWidth} : TInputProps) => {
    const {control} = useFormContext()
    return (
        <Controller
        control={control}
        name={name}
        render={({ field}) => (
          <TextField {...field} fullWidth={fullWidth} label={label}  variant="outlined" type={type} size={size} />
        )}
      />
    );
};

export default PHInput;