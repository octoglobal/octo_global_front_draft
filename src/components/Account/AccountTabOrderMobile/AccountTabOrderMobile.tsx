import React, {FC} from 'react';
import { useAccountTabOrderMobileStyles } from '@/components/Account/AccountTabOrderMobile/style';
import DropDownUI from '../../../UI/UIComponents/DropDownUI/DropDownUI';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import SmallMenuIcon from '../../../UI/UIIcon/SmallMenuIcon.svg';

const AccountTabOrderMobile : FC<{active?: boolean}> = ({active = false}) => {

	const {
		pushTo,
	} = useCustomRouter();

	const dropItems = [
		{title: 'Ожидаемые', onClick: () => pushTo('/account/orders/wait')},
		{title: 'На складе', onClick: () => pushTo('/account/orders/stock')},
		{title: 'Отправлены', onClick: () => pushTo('/account/orders/send')},
		{title: '+ Добавить', onClick: () => pushTo('/account/orders/add')},
	];

	return (
		<ContainerMUI>
			<TextMUI active={active}>
				Заказы
			</TextMUI>
			<DropDownWrapperMUI>
				<DropDownUI
					itemId={0}
					dropItems={dropItems}
					CustomIcon={SmallMenuIcon}
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
