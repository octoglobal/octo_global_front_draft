import React, {FC, useCallback, useMemo} from 'react';

import {useAppDispatch} from '@/hooks/useReduxHooks';
import {fetchDeleteAddress, fetchDeleteAddressAdmin, fetchUserAutoLogin} from '@/reducers/userSlice/asyncActions/userApi';
import {useLocationListStyle} from '@/components/Account/AccountPersonalData/AccountLocations/LocationList/style';
import AddressUser from '@/components/Account/AccountPersonalData/AccountLocations/AddressUser/AddressUser';
import {IAddressModel} from '@/models/IAddressModel';

interface ILocationList {
	addresses: IAddressModel[];
	showAll: boolean;
	isAdmin: boolean;
	userId: number
}

const LocationList: FC<ILocationList> = ({showAll, addresses, isAdmin,userId}) => {
	const dispatch = useAppDispatch();

	const hasAddress = useMemo(() => typeof addresses !== 'undefined', [addresses]);
	
	const handlerDeleteLocation = useCallback((id: number) => {

		if (isAdmin){
			dispatch(fetchDeleteAddressAdmin(
				{address_id: id,
					userId: userId,
				}))
				.then(() => {
					dispatch(fetchUserAutoLogin());
				});
		} else {
			dispatch(fetchDeleteAddress({address_id: id}))
				.then(() => {
					dispatch(fetchUserAutoLogin());
				});
		}
		

		
	}, []);

	return (
		<ListMUI>
			{hasAddress && addresses.map((address) => (
				<AddressUser
					key={address.id}
					id={address.id}
					name={address.name}
					surname={address.surname}
					phone={address.phone}
					location={address.address_string}
					handlerDeleteLocation={handlerDeleteLocation}
				/>
			))}
		</ListMUI>
	);
};

const {
	ListMUI
} = useLocationListStyle();

export default React.memo(LocationList);
