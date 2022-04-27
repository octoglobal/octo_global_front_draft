import React, { FC,useState } from 'react';
import { useBtnSectionStyles } from '@/components/Blog/BlogItem/BtnSection/style';
import BascetIcon from '../../../../UI/UIIcon/Basket.svg';
import EditPencilBlueIcon from '../../../../UI/UIIcon/EditPencilBlue.svg';

import {useUserStore} from '@/hooks/useUserStore';
import ModalConfirmUI from 'UI/UIComponents/ModalConfirmUI/ModalConfirmUI';

interface IBtnSection {
	id:number
}


const BtnSection: FC<IBtnSection> = ({id})=>{
	const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
	
	const {
		isAdmin
	} = useUserStore();


	const handlerDialogOpen = () => {
		console.log('handlerDialogState: openModal');
		setOpenConfirmDialog(true);
	};
	const handlerCancel = () : void => {
		console.log('handlerDialogState: closeModal');
		setOpenConfirmDialog(false);
	};
	return (
		<>
			{ isAdmin? <BtnSectionMUI>
				<ButtonIconMUI onClick={handlerDialogOpen}>
					<BascetIcon/>
				</ButtonIconMUI>
					
				<ButtonIconMUI >
					<EditPencilBlueIcon/>
				</ButtonIconMUI>
				
					
				
			</BtnSectionMUI>: null}
			<ModalConfirmUI 
			
				open={openConfirmDialog}
				title="Вы уверены что хотите удалить пост?"
				onClickYes={handlerCancel}
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