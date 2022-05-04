import { useState } from 'react';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import { fetchDeleteBlogItem } from '@/store/reducers/blogSlice/asyncThunk/blogApi';
import { updateEditMode } from '@/store/reducers/blogSlice/blogSlice';
import {useUserStore} from '@/hooks/useUserStore';

export const useBtnSection = (id:number)=>{

	const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
	const dispatch = useAppDispatch();
	const {
		isAdmin
	} = useUserStore();
	const canRender =  isAdmin && window.location.pathname !== '/'  ? true: false;

	const handlerDialogOpen = () => {		
		setOpenConfirmDialog(true);
	};

	const handlerFetchDelete = (id:number)  => {
		return ()=>{		
			dispatch(fetchDeleteBlogItem({id:id}));			
			setOpenConfirmDialog(false);
		};

		
	};
	const handlerCancel = ():void  => {
		
		setOpenConfirmDialog(false);		
	};

	const handleEditMode = ()  => {	
		console.log('edit id', id);	
		dispatch(updateEditMode({open: true,id:id}));
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});	
	};
	return {
		openConfirmDialog,
		canRender,
		handlerDialogOpen,
		handlerFetchDelete,
		handlerCancel,
		handleEditMode,
	};
};