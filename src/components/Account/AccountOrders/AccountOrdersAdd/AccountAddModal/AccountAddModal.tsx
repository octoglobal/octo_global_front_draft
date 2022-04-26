import React, { FC } from 'react';
import ModalUI from '../../../../../UI/UIComponents/ModalUI/ModalUI';

interface IAccountAddModalProps {
	open: boolean;
	onClose: () => void;
}

const AccountAddModal: FC<IAccountAddModalProps> = ({ open, onClose }) => {
	return (
		<ModalUI
			dialogProps={{
				open: open,
				onClose,
			}}
			title='Заказ добавлен'/>
	);
};

// const ButtonContainerMUI = styled('div')(() => ({
// 	maxWidth: '135px',
// 	margin: '68px auto 0',
// 	'& > button': {
// 		opacity: 0.8,
// 		fontWeight: 400,
// 		minWidth: '135px',
// 		height: '32px',
// 		marginBottom: 0,
// 	}
// }));

export default React.memo(AccountAddModal);
