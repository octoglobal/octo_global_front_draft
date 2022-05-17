import React, {FC, useState} from 'react';
import { useAccountTabOrderMobileStyles } from '@/components/Account/AccountTabOrderMobile/style';
import DropDownUI from '../../../UI/UIComponents/DropDownUI/DropDownUI';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import {useUserStore} from '@/hooks/useUserStore';
import {useAppSelector} from '@/hooks/useReduxHooks';

const AccountTabOrderMobile : FC<{active?: boolean}> = ({active = false}) => {

	const {
		router,
	} = useCustomRouter();

	const {
		isAdmin
	} = useUserStore();

	const {
		adminSwitchIdToUser
	} = useAppSelector(state => state.adminReducer);

	const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

	const handlePush = (url: string) => {
		const query = isAdmin ? `?userId=${adminSwitchIdToUser}` : '';
		router.push(`${url}${query}`);
	};

	const dropItems = [
		{title: 'Ожидаемые', onClick: () => handlePush('/account/orders/wait')},
		{title: 'На складе', onClick: () => handlePush('/account/orders/stock')},
		{title: 'Отправленые', onClick: () => handlePush('/account/orders/send')},
		{title: '+ Добавить', onClick: () => handlePush('/account/orders/add')},
	];

	return (
		<ContainerMUI>
			<TextMUI
				active={active}
				onClick={() => setDropDownOpen(true)}
			>
				Заказы
			</TextMUI>
			<DropDownWrapperMUI>
				<DropDownUI
					itemId={0}
					externalOpen={dropDownOpen}
					setExternalOpen={setDropDownOpen}
					dropItems={dropItems}
				/>
			</DropDownWrapperMUI>
		</ContainerMUI>
	);
};

const {
	TextMUI,
	ContainerMUI,
	DropDownWrapperMUI,
} = useAccountTabOrderMobileStyles();

export default React.memo(AccountTabOrderMobile);
