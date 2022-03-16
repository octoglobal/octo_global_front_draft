import React, {FC} from 'react';
import {createTheme, ThemeProvider} from '@mui/material'

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

interface themeProps {
    children: React.ReactNode | React.ReactChildren
}

const Theme: FC<themeProps> = ({children}) => {

    const theme = createTheme({
        status: {
            danger: 'red'
        }
    })


    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
