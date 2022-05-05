import { useEffect } from 'react';
import { useAppDispatch,useAppSelector } from '@/hooks/useReduxHooks';
import { updateEditMode } from '@/store/reducers/blogSlice/blogSlice';

export const useBlogNewPost = () => {
	const { blogData,EditMode } = useAppSelector(state => state.blogReducer);
	
	const isOpen = EditMode.open;
	const dispatch = useAppDispatch();

	const handleToggleNewPost = () => {
		dispatch(updateEditMode({open:!isOpen,id:null}));
		
	};

	useEffect(() => {
		if (isOpen) {			
			dispatch(updateEditMode({open:false,id:null}));				
		}
	}, [blogData]);

	return {
		
		isOpen,
		handleToggleNewPost
	};
};
