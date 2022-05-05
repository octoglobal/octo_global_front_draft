import React, { FC } from 'react';
import ModalUI from '../../../../../UI/UIComponents/ModalUI/ModalUI';

interface IAccountAddModalProps {
	open: boolean;
	onClose: () => void;
	setState?: () => void;
}

const AccountAddModal: FC<IAccountAddModalProps> = ({ open, onClose }) => {
	return (
		<ModalUI
			dialogProps={{
				open: open,
				onClose,
			}}
			closeTime={5}
			title='Заказ добавлен'/>
	);
};

export default React.memo(AccountAddModal);
