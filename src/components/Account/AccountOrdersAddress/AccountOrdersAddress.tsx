import React from 'react';
import {useAccountOrdersAddressStyles} from '@/components/Account/AccountOrdersAddress/style';
import AddressList from '@/components/Account/AccountOrdersAddress/AddressList/AddressList';
import {FormProvider} from 'react-hook-form';
import {useAccountOrdersAddress} from '@/components/Account/AccountOrdersAddress/useAccountOrdersAddress';
import AddressCollapse from '@/components/Account/AccountOrdersAddress/AddressCollapse/AddressCollapse';
import ModalUI from '../../../UI/UIComponents/ModalUI/ModalUI';

const AccountOrdersAddress = () => {

	const {
		methods,
		onSubmit,
		isCollapse,
		setIsCollapse,
		isSuccessModal,
		handlePushStock,
		setIsSuccessModal,
		handleToggleCollapse,
	} = useAccountOrdersAddress();


	return (
		<ContainerMUI>
			<WrapperMUI>
				<FormProvider {...methods}>
					<FormMUI onSubmit={methods.handleSubmit(onSubmit)}>
						<TitleMUI>
							Выберите получателя
						</TitleMUI>
						<AddressMUI>
							<AddressList/>
						</AddressMUI>
						<ActionsMUI>
							{!isCollapse && (
								<>
									<ButtonOutfilledMUI onClick={handleToggleCollapse}>
										Добавить адрес
									</ButtonOutfilledMUI>
									<ButtonMUI type='submit'>
										Оформить
									</ButtonMUI>
								</>
							)}
						</ActionsMUI>
					</FormMUI>
				</FormProvider>
				<AddressCollapse
					setOpenForm={setIsCollapse}
					collapseProps={{
						in: isCollapse,
					}}
				/>
			</WrapperMUI>
			{isSuccessModal && (
				<ModalUI
					dialogProps={{
						open: isSuccessModal,
						onClose: setIsSuccessModal,
					}}
					title='Посылка оформлена'
					buttonText='На склад'
					containerStyles={{minWidth: '165px'}}
					buttonClick={handlePushStock}
					buttonProps={{sx: {minWidth: '165px', opacity: 1}}}
				/>
			)}
		</ContainerMUI>
	);
};

const {
	WrapperMUI,
	FormMUI,
	TitleMUI,
	ButtonMUI,
	ActionsMUI,
	ButtonOutfilledMUI,
	AddressMUI,
	ContainerMUI
} = useAccountOrdersAddressStyles();

export default React.memo(AccountOrdersAddress);
