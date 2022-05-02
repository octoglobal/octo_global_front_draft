import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { octoAxios } from '@/lib/http';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { IDefaultFetchSuccess } from '../../../types/types';
import { route } from 'next/dist/server/router';

interface IFormState {
	addressSelect: {
		text: undefined | string,
		id: undefined | number,
	}
}

export const useAccountOrdersAddress = () => {

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
		setIsCollapse(prevState => !prevState);
	};

	const onSubmit: SubmitHandler<IFormState & FieldValues> = (data) => {
		const addressId = data.addressSelect.id;
		const packageId = router.query?.packageId;
		if (addressId && packageId) {
			try {
				octoAxios.post<IDefaultFetchSuccess>('/user/package/address', {
					'packageId': packageId,
					'addressId': addressId
				}).then(response => {
					if (response.data.message === 'success') {
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
