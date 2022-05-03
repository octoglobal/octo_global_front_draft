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

export default React.memo(AccountAddModal);
