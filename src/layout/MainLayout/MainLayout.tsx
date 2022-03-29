import React, {FC} from 'react';
import {Box} from '@mui/material';
import Header from '@/components/AnyPage/Header/Header';
import Footer from '@/components/AnyPage/Footer/Footer';
import ContentLayout from '../ContentLayout/ContentLayout';

import Theme from '../../theme/theme';
import {useUpdateRefresh} from '@/hooks/useUpdateRefresh';
import {useUserStore} from '@/hooks/useUserStore';
interface MainLayout {
	children: React.ReactChild | React.ReactNode;
}

const MainLayout: FC<MainLayout> = ({children}) => {

	useUpdateRefresh();
	useUserStore();

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
