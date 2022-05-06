import React, {FC, useCallback, useMemo} from 'react';

import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchDeleteAddress, fetchUserAutoLogin} from '@/reducers/userSlice/asyncActions/userApi';
import {useLocationListStyle} from '@/components/Account/AccountPersonalData/AccountLocations/LocationList/style';
import AddressUser from '@/components/Account/AccountPersonalData/AccountLocations/AddressUser/AddressUser';
import {IAddressModel} from '@/models/IAddressModel';

interface ILocationList {
	addresses: IAddressModel[];
	showAll: boolean;
}

const LocationList : FC<ILocationList> = ({showAll, addresses}) => {
	const dispatch = useAppDispatch();

	const hasAddress = useMemo(() => typeof addresses !== 'undefined', [addresses]);

	const handlerDeleteLocation = useCallback((id: number) => {
		dispatch(fetchDeleteAddress({address_id: id}))
			.then(() => {
				dispatch(fetchUserAutoLogin());
			});
	}, []);

	return (
		<ListMUI>
			{hasAddress && addresses.slice(0, !showAll ? 2 : addresses?.length).map((address) => (
				<>
					<AddressUser
						key={address.id}
						id={address.id}
						name={address.name}
						surname={address.surname}
						phone={address.phone}
						location={address.address_string}
						handlerDeleteLocation={handlerDeleteLocation}
					/>
				</>
			))}
		</ListMUI>
	);
};

const {
	ListMUI
} = useLocationListStyle();

export default React.memo(LocationList);