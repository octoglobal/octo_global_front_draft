import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo, useState} from 'react';
import {fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
import {useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';
import {octoAxios} from '@/lib/http';

export const useAccountOrdersWait = () => {

	const {
		isAdmin,
	} = useUserStore();

	const {
		page,
		pageLimit,
		orderWaitData,
	} = useAppSelector(state => state.orderWaitReducer);

	const dispatch = useAppDispatch();
	const methods = useForm();
	const [isModal, setIsModal] = useState<boolean>(false);

	const isDataLength = useMemo(() => (
		!!(orderWaitData.length && Array.isArray(orderWaitData))
	), [orderWaitData]);

	const handleToggleModal = () => {
		setIsModal(prevState => !prevState);
	};

	const handleDeleteOrder = () => {
		// const sendData = {
		// 	'userId': 66,
		// 	'orderId': 1
		// };
		// octoAxios.delete('/admin/orders', {
		// 	data: sendData
		// }).then(r => console.log(r));
		handleToggleModal();
	};

	const dropDownData = [
		{title: 'Удалить', onClick: handleToggleModal},
		{title: 'Перенести', onClick: () => console.log(1)},
	];


	useEffect(() => {
		if (page === 1) {
			dispatch(fetchOrderWaitData({page, pageLimit}));
		}
	}, []);

	const dialogStyles = {
		'& .MuiDialog-container': {
			'& .MuiPaper-root': {
				minWidth: '704px',
				maxHeight: '353px',
				height: '100%',
				width: '100%',
				'& > div': {
					height: '100%',
					padding: '115px 10px',
					textAlign: 'center',
					'& > div': {
						'& > h4': {
							marginBottom: '70px',
						},
						'& > button': {
							width: '65px !important',
							padding: '0',
							minWidth: '65px !important',
						}
					}
				},
			}
		}
	};

	return {
		isModal,
		isAdmin,
		methods,
		dialogStyles,
		dropDownData,
		isDataLength,
		orderWaitData,
		handleDeleteOrder,
		handleToggleModal,
	};
};
