import React, {FC} from 'react';
import {Dialog, SxProps} from '@mui/material';

import ButtonUI from '../ButtonUI/ButtonUI';
import {useModalConfirmStyle} from './style';

interface IModalConfirmUI {
	title: string,
	text?: string,
	open: boolean,
	onClickYes: () => void,
	onClickNo: () => void,
	buttonNoText?: string;
	dialogSx?: SxProps
}

const ModalConfirmUI: FC<IModalConfirmUI> = (
	{
		title = '',
		open = false,
		onClickYes,
		onClickNo,
		buttonNoText,
		dialogSx = {}}
) => {

	const {
		BackDropBlurMUI,
		ModalUI,
		ButtonCancelUI,
		ButtonConfirmUI,
		DialogActionsUI,
		DialogTitleUI
	} = useModalConfirmStyle();

	return (
		<Dialog
			sx={dialogSx}
			open={open}
			BackdropComponent={BackDropBlurMUI}
			onBackdropClick={onClickNo}
			onClose={onClickNo}
			disableScrollLock
		>
			<ModalUI>
				<DialogTitleUI>{title}</DialogTitleUI>
				<DialogActionsUI>
					<ButtonUI
						style={ButtonConfirmUI}
						onClick={onClickYes}
					>
						Да
					</ButtonUI>
					<ButtonUI
						style={ButtonCancelUI}
						onClick={onClickNo}
					>
						{buttonNoText ? buttonNoText : 'Отмена'}
					</ButtonUI>
				</DialogActionsUI>
			</ModalUI>
		</Dialog>
	);
};

export default React.memo(ModalConfirmUI);
