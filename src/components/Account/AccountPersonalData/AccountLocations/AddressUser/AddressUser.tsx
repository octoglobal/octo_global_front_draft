import React, {FC, useState} from 'react';
import Basket from '../../../../../UI/UIIcon/Basket.svg';
import {useAddressUserStyle} from './style';
import OrderDeleteModal from '@/components/AnyPage/OrderItem/OrderDeleteModal/OrderDeleteModal';
// import {useUserStore} from '@/hooks/useUserStore';

interface IAddressUser {
	id: number,
	name: string,
	surname: string,
	phone: string,
	location: string,
	handlerDeleteLocation: (id: number) => void,
}

const AddressUser: FC<IAddressUser> = ({id, name, surname, phone, location, handlerDeleteLocation}) => {

	// const {
	// 	user: {
	// 		statusId
	// 	}
	// } = useUserStore();
	
	const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

	const handlerDialogState = () => {
		setOpenConfirmDialog(prevState => !prevState);
	};

	const handlerConfirm = (idDelete: number): void => {
		handlerDeleteLocation(idDelete);
		handlerDialogState();
	};

	const handlerCancel = (): void => {
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
				{/*{statusId === 9 && (*/}
				<FormIconUI
					onClick={handlerDialogState}
				>
					<Basket/>
				</FormIconUI>
				{/*// )}*/}
			</FormUI>			
			<OrderDeleteModal
				title="Вы уверены что хотите удалить адрес?"
				buttonNoText='Нет'
				onClickYes={() => handlerConfirm(id)}
				onClickNo={handlerCancel}
				dialogProps={{
					open: openConfirmDialog,
					
				}}
			/>

			
		</>
	);
};

const {
	FormUI,
	FormWrapperUI,
	FormRowTitleUI,
	FormRowTextUI,
	FormIconUI
} = useAddressUserStyle();

export default React.memo(AddressUser);
