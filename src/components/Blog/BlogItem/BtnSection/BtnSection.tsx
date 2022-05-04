import React, { FC } from 'react';
import { useBtnSectionStyles } from '@/components/Blog/BlogItem/BtnSection/style';
import BascetIcon from '../../../../UI/UIIcon/Basket.svg';
import EditPencilBlueIcon from '../../../../UI/UIIcon/EditPencilBlue.svg';

import ModalConfirmUI from 'UI/UIComponents/ModalConfirmUI/ModalConfirmUI';
import { useBtnSection } from './useBtnSection';

interface IBtnSection {
	id:number
}
const BtnSection: FC<IBtnSection> = ({id})=>{
	
	const {
		openConfirmDialog,
		canRender,
		handlerDialogOpen,
		handlerFetchDelete,
		handlerCancel,
		handleEditMode,		
	} = useBtnSection(id);

	


	return (
		<>
			{ canRender? <BtnSectionMUI>
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