import React, { FC,useState } from 'react';
import { useBtnSectionStyles } from '@/components/Blog/BlogItem/BtnSection/style';
import BascetIcon from '../../../../UI/UIIcon/Basket.svg';
import EditPencilBlueIcon from '../../../../UI/UIIcon/EditPencilBlue.svg';

import {useUserStore} from '@/hooks/useUserStore';
import ModalConfirmUI from 'UI/UIComponents/ModalConfirmUI/ModalConfirmUI';


import {useAppDispatch} from '@/hooks/useReduxHooks';
import { fetchDeleteBlogItem } from '@/store/reducers/blogSlice/asyncThunk/blogApi';
import { updateEditMode } from '@/store/reducers/blogSlice/blogSlice';


interface IBtnSection {
	id:number
}


const BtnSection: FC<IBtnSection> = ({id})=>{
	const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
	const dispatch = useAppDispatch();

	const {
		isAdmin
	} = useUserStore();
	

	

	const handlerDialogOpen = () => {		
		setOpenConfirmDialog(true);
	};

	const handlerFetchDelete = (id:number)  => {
		return ()=>{		
			dispatch(fetchDeleteBlogItem(id));			
			setOpenConfirmDialog(false);
		};

		
	};
	const handlerCancel = ():void  => {
		
		setOpenConfirmDialog(false);		
	};

	const handleEditMode = ()  => {
		
		dispatch(updateEditMode({open: true,id:id}));
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});	
	};

	return (
		<>
			{ isAdmin? <BtnSectionMUI>
				<ButtonIconMUI onClick={handlerDialogOpen}>
					<BascetIcon/>
				</ButtonIconMUI>
					
				<ButtonIconMUI onClick={handleEditMode}>
					<EditPencilBlueIcon/>
				</ButtonIconMUI>
				
					
				
			</BtnSectionMUI>: null}
			<ModalConfirmUI 
			
				open={openConfirmDialog}
				title="Вы уверены что хотите удалить пост?"
				onClickYes={handlerFetchDelete(id)}
				onClickNo={handlerCancel}
			/>
		</>
	
		
	);
};
const {
	ButtonIconMUI,	
	BtnSectionMUI,
} = useBtnSectionStyles();
export default React.memo(BtnSection);