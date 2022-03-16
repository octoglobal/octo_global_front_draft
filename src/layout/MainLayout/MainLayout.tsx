import React, {FC} from 'react';
import Header from '../../components/AnyPage/Header/Header';
import Footer from '../../components/AnyPage/Footer/Footer';
import Theme from '../../components/AnyPage/theme/theme';
import {Box} from '@mui/material';

interface MainLayout {
    children: React.ReactChild | React.ReactNode
}


const MainLayout: FC<MainLayout> = ({children}) => {
	return (
		<Theme>
			<Header/>
			<Box component='main'>
				{children}
			</Box>
			<Footer/>
		</Theme>
	);
};

export default MainLayout;
