import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface IDatePicker {
    name: string,
    size?: 'small' | 'medium',
    label?: string,
    required?: boolean,
    fullWidth?: boolean,
    sx?: SxProps
}
const PHDatePicker = ({ name, size = 'small', required, label, fullWidth = true, sx }: IDatePicker) => {
    const {control} = useFormContext()    
    return (
        <Controller
            name={name}
            control={ control}
            defaultValue={dayjs(new Date().toDateString())}
            render ={({field  :{onChange, value, ...field}}) => {
                return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker 
                        timezone='system'
                        disablePast

                        slotProps={{
                            textField :{
                                variant : 'outlined'
                            }
                        }}
                        {...field}
                        onChange={(date)=> onChange(date)}
                        value={value || Date.now()}
                        />
                    </LocalizationProvider>
                )
            }}
        />
    );
};

export default PHDatePicker;