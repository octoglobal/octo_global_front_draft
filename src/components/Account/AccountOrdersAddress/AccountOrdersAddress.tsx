import React  from 'react';
import { useAccountOrdersAddressStyles } from '@/components/Account/AccountOrdersAddress/style';
import AddressList from '@/components/Account/AccountOrdersAddress/AddressList/AddressList';
import { FormProvider } from 'react-hook-form';
import { useAccountOrdersAddress } from '@/components/Account/AccountOrdersAddress/useAccountOrdersAddress';
import AddressCollapse from '@/components/Account/AccountOrdersAddress/AddressCollapse/AddressCollapse';

const AccountOrdersAddress = () => {

	const {
		methods,
		onSubmit,
		isCollapse,
		setIsCollapse,
		isAddressSelect,
		handleToggleCollapse
	} = useAccountOrdersAddress();


	return (
		<ContainerMUI>
			<FormProvider {...methods}>
				<FormMUI onSubmit={methods.handleSubmit(onSubmit)}>
					<TitleMUI>
						Выберите получателя
					</TitleMUI>
					<AddressMUI>
						<AddressList/>
					</AddressMUI>
					{isAddressSelect && (
						<ButtonMUI type='submit'>
							Оформить
						</ButtonMUI>
					)}
				</FormMUI>
			</FormProvider>
			<AddressCollapse
				setOpenForm={setIsCollapse}
				collapseProps={{
					in: isCollapse,
				}}
			/>
			{!isAddressSelect && (
				!isCollapse && (
					<ButtonMUI onClick={handleToggleCollapse}>
						Добавить
					</ButtonMUI>
				)
			)}
		</ContainerMUI>
	);
};

const {
	FormMUI,
	TitleMUI,
	ButtonMUI,
	AddressMUI,
	ContainerMUI
} = useAccountOrdersAddressStyles();

export default React.memo(AccountOrdersAddress);
