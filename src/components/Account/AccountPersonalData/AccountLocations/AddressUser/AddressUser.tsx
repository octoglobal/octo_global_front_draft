import React, {FC, useCallback, useState} from 'react';

import Basket from '../../../../../UI/UIIcon/Basket.svg';
import ModalConfirmUI from '../../../../../UI/UIComponents/ModalConfirmUI/ModalConfirmUI';

import {useAddressUserStyle} from './style';

interface IAddressUser {
	id: number,
	name: string,
	surname: string,
	phone: string,
	location: string
}

const AddressUser: FC<IAddressUser> = ({
	name,
	surname,
	phone,
	location
}) => {

	const {
		FormUI,
		FormWrapperUI,
		FormRowTitleUI,
		FormRowTextUI,
		FormIconUI
	} = useAddressUserStyle();

	const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

	const handlerDialogState = useCallback(() => {
		setOpenConfirmDialog(prevState => !prevState);
	}, []);

	const handlerConfirm = () : void => {
		console.log('handlerConfirm: ');
		handlerDialogState();
	};

	const handlerCancel = () : void => {
		console.log('handlerCancel: ');
		handlerDialogState();
	};

	return (
		<>
			<FormUI>
				<FormWrapperUI>
					<FormRowTitleUI>Имя</FormRowTitleUI>
					<FormRowTextUI>{name}</FormRowTextUI>

					<FormRowTitleUI>Фамилия</FormRowTitleUI>
					<FormRowTextUI>{surname}</FormRowTextUI>

					<FormRowTitleUI>Телефон</FormRowTitleUI>
					<FormRowTextUI>{phone}</FormRowTextUI>

					<FormRowTitleUI>Адрес</FormRowTitleUI>
					<FormRowTextUI>{location}</FormRowTextUI>
				</FormWrapperUI>
				<FormIconUI
					onClick={handlerDialogState}
				>
					<Basket />
				</FormIconUI>
			</FormUI>
			<ModalConfirmUI
				open={openConfirmDialog}
				title="Вы уверены что хотите удалить адрес?"
				onClickYes={handlerConfirm}
				onClickNo={handlerCancel}
			/>
		</>
	);
};

export default React.memo(AddressUser);
