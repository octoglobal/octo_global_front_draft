import React, {FC} from 'react';
import {createTheme, ThemeProvider} from '@mui/material';

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
	children: React.ReactNode | React.ReactChildren;
}

const Theme: FC<themeProps> = ({children}) => {

	const lightTheme = createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#234A82',
				dark: '#000000'
			}
		},
		components: {
			MuiTextField: {
				styleOverrides: {
					root: {
						'& > .MuiFormHelperText-root': {
							color: 'red',
							fontSize: '14px',
							marginLeft: 0
						}
					}
				}
			}
		},
		status: {
			danger: 'red'
		}
	});


	return (
		<ThemeProvider theme={lightTheme}>
			{children}
		</ThemeProvider>
	);
};

export default React.memo(Theme);
