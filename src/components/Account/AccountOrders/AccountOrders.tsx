import React, {FC, MouseEventHandler, useState} from 'react';
import { List, Divider } from '@mui/material';
import {useForm} from 'react-hook-form';

import AccountOrdersArray from './AccountOrdersData.json';
import OrderCard from './OrderCard/OrderCard';
import {IOrderCard} from '../../../types/types';
import {useCustomRouter} from '../../../hooks/useCustomRouter';
import AddTrackForm from '../../forms/AddTrackForm/AddTrackForm';

import {useAccountOrdersStyle} from './style';
import CheckBoxUI from 'UI/UIComponents/CheckBoxUI/CheckBoxUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
// import HorizontalList from '@/components/AnyPage/HorizontalList/HorizontalList';

const AccountOrders: FC = () => {

	const {router, pushTo} = useCustomRouter();

	const {
		AccountOrdersWrapperUI,
		OrdersUI,
		OrdersNotifUI,
		OrderCardWrappUI,
		OrdersItemUI,
		ListItemTextUI,
		ListItemUI,
		ButtonExecutParcelUI
	} = useAccountOrdersStyle();

	const {control} = useForm();

	const [filterOrders, setFiltedOrders] = useState(router?.query?.tab || 'all');

	const toggleFilters = (filter : string) : MouseEventHandler<HTMLDivElement> => {
		return () : void => {
			setFiltedOrders(filter);
			pushTo(router.pathname, {tab: filter});
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
				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 'all'}
						onClick={toggleFilters('all')}
					>
						Все
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 'expect'}
						onClick={toggleFilters('expect')}
					>
						Ожидаемые
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 'wait'}
						onClick={toggleFilters('wait')}
					>
						Ждут отправки
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 'send'}
						onClick={toggleFilters('send')}
					>
						Отправлены
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 'deliv'}
						onClick={toggleFilters('deliv')}
					>
						Доставлены
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 'addTrack'}
						onClick={handlerAddTrack}
					>
						+ Добавить
					</ListItemTextUI>
				</ListItemUI>
			</List>

			{/*<HorizontalList*/}
			{/*	onClick={toggleFilters}*/}
			{/*	list={['all', 'expect', 'wait', 'send', 'deliv', 'addTrack']}*/}
			{/*/>*/}

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
