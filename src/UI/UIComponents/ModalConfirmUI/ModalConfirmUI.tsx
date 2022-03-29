import React, {FC} from 'react';
import { Dialog, DialogContent, DialogContentText } from '@mui/material';

import ButtonUI from '../ButtonUI/ButtonUI';
import {useModalConfirmStyle} from './style';

interface IModalConfirmUI {
	title: string,
	text?: string,
	open: boolean,
	onClickYes: () => void,
	onClickNo: () => void
}

const ModalConfirmUI: FC<IModalConfirmUI> = ({
	title = '',
	text = '',
	open = false,
	onClickYes,
	onClickNo
}) => {

	const {
		ModalUI,
		ButtonCancelUI,
		ButtonConfirmUI,
		DialogActionsUI,
		DialogTitleUI
	} = useModalConfirmStyle();

	return (
		<Dialog
			open={open}
		>
			<ModalUI className="123">
				<DialogTitleUI>{title}</DialogTitleUI>
				<DialogContent>
					<DialogContentText>{text}</DialogContentText>
				</DialogContent>
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
						Отмена
					</ButtonUI>
				</DialogActionsUI>
			</ModalUI>
		</Dialog>
	);
};

export default React.memo(ModalConfirmUI);
