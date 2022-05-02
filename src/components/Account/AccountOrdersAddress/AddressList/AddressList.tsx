import React from 'react';
import { useAddressList } from '@/components/Account/AccountOrdersAddress/AddressList/useAddressList';
import AddressItem from '@/components/Account/AccountOrdersAddress/AddressItem/AddressItem';

const AddressList = () => {

	const {
		addresses,
		isAddresses,
	} = useAddressList();

	return (
		<>
			{isAddresses && (
				addresses.map(address => (
					<AddressItem
						key={address.id}
						{...address}
					/>
				))
			)}
		</>
	);
};

export default React.memo(AddressList);
