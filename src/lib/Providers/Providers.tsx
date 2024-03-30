"use client"
import { theme } from '@/lib/theme/theme';
import { store } from '@/redux/store';
import { ThemeProvider } from '@mui/material'
import React from 'react';
import { Provider } from 'react-redux';
const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>


    );
};

export default Providers;