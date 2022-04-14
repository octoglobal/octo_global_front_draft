import React, {FC, useState} from 'react';

import Basket from '../../../../../UI/UIIcon/Basket.svg';
import ModalConfirmUI from '../../../../../UI/UIComponents/ModalConfirmUI/ModalConfirmUI';

import {useAddressUserStyle} from './style';
import {useUserStore} from '@/hooks/useUserStore';

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

	const {
		user: {
			statusId
		}
	} = useUserStore();

	const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

	const handlerDialogState = () => {
		console.log('handlerDialogState: ');
		setOpenConfirmDialog(prevState => !prevState);
	};

	console.log('openConfirmDialog: ', openConfirmDialog);

	const handlerConfirm = (idDelete : number) : void => {
		// return () => {
		handlerDeleteLocation(idDelete);
		handlerDialogState();
		// };
	};

	const handlerCancel = () : void => {
		console.log('handlerCancel: ');
		setOpenConfirmDialog(false);
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
				{statusId === 9 && (
					<FormIconUI
						onClick={handlerDialogState}
					>
						<Basket />
					</FormIconUI>
				)}
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
