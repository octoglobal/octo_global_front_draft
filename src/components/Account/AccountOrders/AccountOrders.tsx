import React, {FC, MouseEventHandler, useState} from 'react';
import { List, ListItem, Divider } from '@mui/material';
import {useForm} from 'react-hook-form';

import AccountOrdersArray from './AccountOrdersData.json';
import OrderCard from './OrderCard/OrderCard';
import {IOrderCard} from '../../../types/types';
import {useCustomRouter} from '../../../hooks/useCustomRouter';
import AddTrackForm from '../../forms/AddTrackForm/AddTrackForm';

import {useAccountOrdersStyle} from './style';
import CheckBoxUI from 'UI/UIComponents/CheckBoxUI/CheckBoxUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

const AccountOrders: FC = () => {

	const {router, pushTo} = useCustomRouter();

	const {
		AccountOrdersWrapperUI,
		OrdersUI,
		OrdersNotifUI,
		OrderCardWrappUI,
		OrdersItemUI,
		ListItemTextUI,
		ButtonExecutParcelUI
	} = useAccountOrdersStyle();

	const {control} = useForm();

	const [filterOrders, setFiltedOrders] = useState(router?.query?.tab || 'all');

	const toggleFilters = (filter : string) : MouseEventHandler<HTMLDivElement> => {
		return () : void => {
			console.log('toggleFilters: ', filter);
			setFiltedOrders(filter);
		};
	};

	const handlerAddTrack = (): void => {
		toggleFilters('add');
		console.log('router: ', router.pathname);
		pushTo(router.pathname, {tab: 'addTrack'});
	};

	const MockDataOrders: IOrderCard[] = AccountOrdersArray;

	return (
		<AccountOrdersWrapperUI>
			<List dense={false}>
				<ListItem>
					<ListItemTextUI
						selected={filterOrders === 'all'}
						onClick={toggleFilters('all')}
					>
						Все
					</ListItemTextUI>
				</ListItem>

				<ListItem>
					<ListItemTextUI
						selected={filterOrders === 'wait'}
						onClick={toggleFilters('wait')}
					>
						Ждут отправки
					</ListItemTextUI>
				</ListItem>

				<ListItem>
					<ListItemTextUI
						selected={filterOrders === 'send'}
						onClick={toggleFilters('send')}
					>
						Отправлены
					</ListItemTextUI>
				</ListItem>

				<ListItem>
					<ListItemTextUI
						selected={filterOrders === 'deliv'}
						onClick={toggleFilters('deliv')}
					>
						Доставлены
					</ListItemTextUI>
				</ListItem>

				<ListItem>
					<ListItemTextUI
						selected={filterOrders === 'addTrack'}
						onClick={handlerAddTrack}
					>
						+ Добавить
					</ListItemTextUI>
				</ListItem>
			</List>

			{router?.query?.tab !== 'addTrack' ? (
				<OrdersUI>
					<OrdersNotifUI>
						У вас есть возможность объединить все или несколько заказов
						в одну посылку.
					</OrdersNotifUI>

					<OrdersItemUI>
						{MockDataOrders.filter(order => filterOrders === 'all' ? true : order.status === filterOrders).map((item) => (
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

					<ButtonUI
						style={ButtonExecutParcelUI}
					>
						Оформить посылку
					</ButtonUI>

				</OrdersUI>
			) : (
				<AddTrackForm />
			)}
		</AccountOrdersWrapperUI>
	);
};

export default React.memo(AccountOrders);
