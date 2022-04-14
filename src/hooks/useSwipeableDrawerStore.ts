import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import { toggleDrawer } from '@/store/reducers/swipeableDrawerSlice/swipeableDrawerSlice';

export const useSwipeableDrawerStore = () => {
	const dispatch = useAppDispatch();
	const {
		open
	} = useAppSelector(state => state.swipeableDrawerSliceReducer);

	const toggleSwipeableDrawer = (state?: boolean) => {
		console.log('toggleSwipeableDrawer');
		dispatch(toggleDrawer(state));
	};

	return {
		open,
		toggleDrawer: toggleSwipeableDrawer,
	};
};
