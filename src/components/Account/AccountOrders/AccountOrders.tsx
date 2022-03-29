import React, {FC} from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import {useForm} from 'react-hook-form';

import AccountOrdersArray from './AccountOrdersData.json';
import OrderCard from './OrderCard/OrderCard';
import {IOrderCard, IOrderInfo} from '../../../types/types';

import {useAccountOrdersStyle} from './style';
import CheckBoxUI from 'UI/UIComponents/CheckBoxUI/CheckBoxUI';

const AccountOrders: FC = () => {

	const {
		AccountOrdersWrapperUI,
		OrdersUI,
		OrdersNotifUI,
		OrderCardWrappUI,
		OrdersItemUI
	} = useAccountOrdersStyle();

	const {control} = useForm();

	const MockDataOrders: IOrderInfo[] = AccountOrdersArray;

	// console.log("MockDataOrders: ", MockDataOrders);

	return (
		<AccountOrdersWrapperUI>
			<List dense={false}>
				<ListItem>
					<ListItemText>Все</ListItemText>
				</ListItem>

				<ListItem>
					<ListItemText>Ждут отправки</ListItemText>
				</ListItem>

				<ListItem>
					<ListItemText>Отправлены</ListItemText>
				</ListItem>

				<ListItem>
					<ListItemText>Доставлены</ListItemText>
				</ListItem>
			</List>

			<OrdersUI>
				<OrdersNotifUI>
					У вас есть возможность объединить все или несколько заказов
					в одну посылку.
				</OrdersNotifUI>

				<OrdersItemUI>
					{MockDataOrders.map((item) => (
						<React.Fragment key={item.id}>
							<OrderCardWrappUI>
								<CheckBoxUI
									controller={{
										name: 'checkbox',
										control,
										defaultValue: '',
										rules: {
											required: 'Заполните все поля',
										},
									}}
								/>
								<OrderCard
									order={item}
								/>
							</OrderCardWrappUI>
							<Divider />
						</React.Fragment>
					))}
				</OrdersItemUI>
			</OrdersUI>
		</AccountOrdersWrapperUI>
	);
};

export default React.memo(AccountOrders);
