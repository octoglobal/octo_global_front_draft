import React, {FC, useCallback, useState} from 'react';

import Basket from '../../../../../UI/UIIcon/Basket.svg';
import ModalConfirmUI from '../../../../../UI/UIComponents/ModalConfirmUI/ModalConfirmUI';

import {useAddressUserStyle} from './style';

interface IAddressUser {
	id: number,
	name: string,
	surname: string,
	phone: string,
	location: string,
	handlerDeleteLocation: (id: number) => void,
}

const AddressUser: FC<IAddressUser> = ({
	id,
	name,
	surname,
	phone,
	location,
	handlerDeleteLocation
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

	const handlerConfirm = (idDelete : number) : void => {
		// return () => {
		console.log('handlerConfirm: ');
		handlerDeleteLocation(idDelete);
		handlerDialogState();
		// };
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
				onClickYes={() => handlerConfirm(id)}
				onClickNo={handlerCancel}
			/>
		</>
	);
};

export default React.memo(AddressUser);
