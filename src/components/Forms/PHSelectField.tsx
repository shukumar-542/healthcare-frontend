import { MenuItem, SxProps, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
type TInputProps = {
    name : string,
    label?: string,
    type? : string,
    size ?: 'small' | "medium",
    fullWidth ?: boolean,
    sx? : SxProps,
    placeholder ?: string,
    required ?: boolean
    items : string[]
}

const PHSelectField = ({items,name,sx, label,required, fullWidth, size='small'} : TInputProps) => {
    const { control } = useFormContext()
    return (
        <Controller
            control={control}
            name = {name}
            render={(field )=>(
                <TextField
                {...field}
                sx={{
                    ...sx
                }}
                label={label}
                size={size}
                select
                required={required}
                fullWidth ={fullWidth}
                >
                    {
                        items.map((name)=>(
                            <MenuItem key={name} value={name}>{name}</MenuItem>
                        ))
                    }
                </TextField>
            )}
        />
    );
};

export default PHSelectField;