import React, {FC, useState} from 'react';
import { useAccountTabOrderMobileStyles } from '@/components/Account/AccountTabOrderMobile/style';
import DropDownUI from '../../../UI/UIComponents/DropDownUI/DropDownUI';
import { useCustomRouter } from '@/hooks/useCustomRouter';

const AccountTabOrderMobile : FC<{active?: boolean}> = ({active = false}) => {

	const {
		pushTo,
	} = useCustomRouter();
	const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

	const dropItems = [
		{title: 'Ожидаемые', onClick: () => pushTo('/account/orders/wait')},
		{title: 'На складе', onClick: () => pushTo('/account/orders/stock')},
		{title: 'Отправлены', onClick: () => pushTo('/account/orders/send')},
		{title: '+ Добавить', onClick: () => pushTo('/account/orders/add')},
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
