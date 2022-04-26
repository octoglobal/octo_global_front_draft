import React, { FC } from 'react';
import { useBtnSectionStyles } from '@/components/Blog/BlogItem/BtnSection/style';
import BascetIcon from '../../../../UI/UIIcon/Basket.svg';
import EditPencilBlueIcon from '../../../../UI/UIIcon/EditPencilBlue.svg';

import {useUserStore} from '@/hooks/useUserStore';

const BtnSection: FC = ()=>{


	const {
		isAdmin
	} = useUserStore();

	return (
		<>
			{ isAdmin? <BtnSectionMUI>
				<ButtonIconMUI>
					<BascetIcon/>
				</ButtonIconMUI>
					
				<ButtonIconMUI>
					<EditPencilBlueIcon/>
				</ButtonIconMUI>
			</BtnSectionMUI>: null}
		</>
	
		
	);
};
const {
	ButtonIconMUI,	
	BtnSectionMUI,
} = useBtnSectionStyles();
export default React.memo(BtnSection);