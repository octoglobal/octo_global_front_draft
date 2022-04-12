import React, {FC, MouseEventHandler, useEffect, useState, useMemo} from 'react';
import { List, Divider } from '@mui/material';
import {useForm} from 'react-hook-form';

import OrderCard from './OrderCard/OrderCard';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import AddTrackForm from '../../forms/AddTrackForm/AddTrackForm';
import CheckBoxUI from 'UI/UIComponents/CheckBoxUI/CheckBoxUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {useOrdersStore} from '@/hooks/useOrdersStore';
// import Basket from '../../../UI/UIIcon/Basket.svg';

import {useAccountOrdersStyle} from './style';
import {checkValidArray} from '@/services/services';
import {IOrderModel} from '@/models/IOrderModel';

const AccountOrders: FC = () => {
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

	const {router, pushTo} = useCustomRouter();
	const {getOrders, orders} = useOrdersStore();
	const {control} = useForm();

	const routerTab = useMemo(
		() => (router.query && router.query.tab) ? +router.query.tab : 6,
		[router.query.tab]
	);

	const [filterOrders, setFiltedOrders] = useState(routerTab);

	const toggleFilters = (filter : number) : MouseEventHandler<HTMLDivElement> => {
		return () : void => {
			setFiltedOrders(filter);
			pushTo(router.pathname, {tab: filter});
		};
	};
	const handlerAddTrack = (): void => {
		toggleFilters(4);
		pushTo(router.pathname, {tab: 4});
	};

	//TODO: временно стоит тут
	useEffect(() => {
		getOrders();
	}, []);

	return (
		<AccountOrdersWrapperUI>
			<List dense={false}>
				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 6}
						onClick={toggleFilters(6)}
					>
						Все
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 0}
						onClick={toggleFilters(0)}
					>
						Ожидаемые
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 1}
						onClick={toggleFilters(1)}
					>
						Ждут отправки
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 2}
						onClick={toggleFilters(2)}
					>
						Отправлены
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 3}
						onClick={toggleFilters(3)}
					>
						Доставлены
					</ListItemTextUI>
				</ListItemUI>

				<ListItemUI>
					<ListItemTextUI
						selected={filterOrders === 4}
						onClick={handlerAddTrack}
					>
						+ Добавить
					</ListItemTextUI>
				</ListItemUI>
			</List>

			{routerTab !== 4 ? (
				<OrdersUI>
					<OrdersNotifUI>
						У вас есть возможность объединить все или несколько заказов
						в одну посылку.
					</OrdersNotifUI>

					<OrdersItemUI>
						{checkValidArray(orders) && orders.filter(item => filterOrders === 6 ? true : item.statusId === filterOrders).map((item : IOrderModel) => (
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
