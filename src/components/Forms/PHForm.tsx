import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
type tFormsProps = {
    children :  React.ReactNode,
    onSubmit : SubmitHandler<FieldValues>
}
const PHForm = ({children , onSubmit} : tFormsProps) => {
    const methods = useForm();
    const { reset} = methods;
    const submit:SubmitHandler<FieldValues> = (data) => {
        onSubmit(data)
        reset()
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submit)}>
                {children}
            </form>
        </FormProvider>
    );
};

export default PHForm;