import { SxProps } from "@mui/material";
import {  LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";


interface ITimePicker {
    name: string,
    size?: 'small' | 'medium',
    label?: string,
    required?: boolean,
    fullWidth?: boolean,
    sx?: SxProps
}
const PHTimePicker = ({ name, size = 'small', required, label, fullWidth = true, sx }: ITimePicker) => {
    const {control} = useFormContext()  
    return (
        <Controller
            name={name}
            control={ control}
            defaultValue={dayjs(new Date().toDateString())}
            render ={({field  :{onChange, value, ...field}}) => {
                return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker 
                        timezone='system'
                        label={label}
                        slotProps={{
                            textField :{
                                variant : 'outlined',
                                fullWidth : true
                            }
                        }}
                        {...field}
                        onChange={(time)=> onChange(time)}
                        value={value || Date.now()}
                        />
                    </LocalizationProvider>
                )
            }}
        />
    );
};

export default PHTimePicker;