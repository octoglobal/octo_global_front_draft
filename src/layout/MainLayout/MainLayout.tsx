import React, {FC, useEffect} from 'react';
import {Box} from '@mui/material';
import Header from '@/components/AnyPage/Header/Header';
import Footer from '@/components/AnyPage/Footer/Footer';
import ContentLayout from '../ContentLayout/ContentLayout';
import {useUpdateRefresh} from '@/hooks/useUpdateRefresh';
import {useUserStore} from '@/hooks/useUserStore';
import Theme from '../../theme/theme';
interface MainLayout {
	children: React.ReactChild | React.ReactNode;
}

const MainLayout: FC<MainLayout> = ({children}) => {

	useUpdateRefresh();
	// useUserStore();
	const {getUser} = useUserStore();

	useEffect(() => {
		getUser();
	}, );

	return (
		<Theme>
			<Header/>
			<Box component="main">
				<ContentLayout>
					{children}
				</ContentLayout>
			</Box>
			<Footer/>
		</Theme>
	);
};

export default React.memo(MainLayout);
