import React, {FC, useEffect, useMemo} from 'react';
import {Box} from '@mui/material';
import Header from '@/components/AnyPage/Header/Header';
import Footer from '@/components/AnyPage/Footer/Footer';
import ContentLayout from '../ContentLayout/ContentLayout';
import {useUpdateRefresh} from '@/hooks/useUpdateRefresh';
import {useUserStore} from '@/hooks/useUserStore';
import Theme from '../../theme/theme';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import ScrollTop from '@/components/AnyPage/ScrollTop/ScrollTop';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {adminSlice} from '@/reducers/adminSlice/adminSlice';
interface MainLayout {
	children: React.ReactChild | React.ReactNode;
}

const MainLayout: FC<MainLayout> = ({children}) => {

	useUpdateRefresh();
	const {getUser, isAdmin} = useUserStore();
	const {router} = useCustomRouter();
	const { adminSwitchIdToUser } = useAppSelector(state => state.adminReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		getUser();
	}, []);

	useEffect(() => {
		if (isAdmin && router) {
			const isAccountLocation = router.pathname.match('account');
			if (!isAccountLocation && adminSwitchIdToUser) {
				dispatch(adminSlice.actions.resetData());
			}
		}
	}, [router]);

	const disabledPadding = useMemo(() => router.route === '/', [router.route]);
	const disabledMargin = useMemo(() => router.route === '/', [router.route]);


	return (
		<Theme>
			<Header/>
			<Box component="main">
				<ContentLayout disabledPadding={disabledPadding} disabledMargin={disabledMargin}>
					{children}
				</ContentLayout>
				<ScrollTop/>
			</Box>
			<Footer/>
		</Theme>
	);
};

export default React.memo(MainLayout);
