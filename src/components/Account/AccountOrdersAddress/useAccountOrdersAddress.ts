import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { fetchPackageAddAddress } from '@/reducers/orderStockSlice/asynThunk/stockApi';

interface IFormState {
	addressSelect: {
		text: undefined | string,
		id: undefined | number,
	}
}

export const useAccountOrdersAddress = () => {

	const dispatch = useAppDispatch();
	const {router} = useCustomRouter();
	const [isCollapse, setIsCollapse] = useState<boolean>(false);

	const methods = useForm<IFormState>({
		defaultValues: {
			addressSelect: {
				text: undefined,
				id: undefined,
			},
		}
	});
	const { addressSelect } = methods.watch();

	const isAddressSelect = useMemo(() => (
		!!addressSelect.text
	), [addressSelect]);

	const handleToggleCollapse = () => {
		methods.setValue('addressSelect', {
			text: undefined,
			id: undefined,
		});
		setIsCollapse(prevState => !prevState);
	};

	const onSubmit: SubmitHandler<IFormState & FieldValues> = (data) => {
		const addressId = data.addressSelect.id;
		const packageId = router.query?.packageId;
		if (addressId && packageId) {
			try {
				dispatch(fetchPackageAddAddress({
					packageId: +packageId,
					addressId: addressId
				})).then(response => {
					if (response.payload == 'success') {
						router.push('/account/orders/stock');
					}
				});
			} catch (e) {
				throw new Error('fetch error add address to package');
			}
		}
	};

	useEffect(() => {
		if (addressSelect.text && isCollapse) {
			setIsCollapse(false);
		}
	}, [addressSelect, isCollapse]);

	return {
		methods,
		onSubmit,
		isCollapse,
		setIsCollapse,
		isAddressSelect,
		handleToggleCollapse
	};
};
