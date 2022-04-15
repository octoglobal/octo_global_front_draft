import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import { toggleDrawer, toggleTab } from '@/store/reducers/swipeableDrawerSlice/swipeableDrawerSlice';

export const useSwipeableDrawerStore = () => {
	const dispatch = useAppDispatch();
	const {
		open,
		openTab
	} = useAppSelector(state => state.swipeableDrawerSliceReducer);

	const toggleSwipeableDrawer = (state?: boolean) => {
		dispatch(toggleDrawer(state));
	};

	const toggleTabSwipeableDrawer = (state: string) => {
		dispatch(toggleTab(state));
	};

	return {
		open,
		openTab,
		toggleDrawer: toggleSwipeableDrawer,
		toggleTab: toggleTabSwipeableDrawer,
	};
};
