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
				open: true,
				onClose,
			}}
			closeTime={5}
			title='Посылка успешно оформлена Отследить ее можно на вкладке отправленные'/>
	);
};

export default React.memo(AccountAddModal);
