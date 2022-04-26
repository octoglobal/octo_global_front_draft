import React, { FC } from 'react';
import { useBtnSectionStyles } from '@/components/Blog/BlogItem/BtnSection/style';
import BascetIcon from '../../../../UI/UIIcon/Basket.svg';
import EditPencilBlueIcon from '../../../../UI/UIIcon/EditPencilBlue.svg';
const BtnSection: FC = ()=>{
	return (
		<BtnSectionMUI>
			<ButtonIconMUI>
				<BascetIcon/>
			</ButtonIconMUI>
						
			<ButtonIconMUI>
				<EditPencilBlueIcon/>
			</ButtonIconMUI>
		</BtnSectionMUI>
	);
};
const {
	ButtonIconMUI,	
	BtnSectionMUI,
} = useBtnSectionStyles();
export default React.memo(BtnSection);