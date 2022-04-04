import React, {FC, useEffect, useMemo} from 'react';
import {Box} from '@mui/material';
import Header from '@/components/AnyPage/Header/Header';
import Footer from '@/components/AnyPage/Footer/Footer';
import ContentLayout from '../ContentLayout/ContentLayout';
import {useUpdateRefresh} from '@/hooks/useUpdateRefresh';
import {useUserStore} from '@/hooks/useUserStore';
import Theme from '../../theme/theme';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {useOrdersStore} from '@/hooks/useOrdersStore';
interface MainLayout {
	children: React.ReactChild | React.ReactNode;
}

const MainLayout: FC<MainLayout> = ({children}) => {

	useUpdateRefresh();
	// useUserStore();
	const {user, getUser} = useUserStore();

	const {router} = useCustomRouter();

	useEffect(() => {
		getUser();
	}, [user.id]);

	const disabledPadding = useMemo(() => router.route === '/', [router.route]);

	return (
		<Theme>
			<Header/>
			<Box component="main">
				<ContentLayout disabledPadding={disabledPadding}>
					{children}
				</ContentLayout>
			</Box>
			<Footer/>
		</Theme>
	);
};

export default React.memo(MainLayout);
