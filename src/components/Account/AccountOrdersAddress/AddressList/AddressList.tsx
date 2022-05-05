import React from 'react';
import { useAddressList } from '@/components/Account/AccountOrdersAddress/AddressList/useAddressList';
import AddressItem from '@/components/Account/AccountOrdersAddress/AddressItem/AddressItem';
import {Divider} from '@mui/material';
import {useAddressListStyles} from '@/components/Account/AccountOrdersAddress/AddressList/style';
import {useCustomSize} from '@/hooks/useMedia';

const AddressList = () => {

	const {
		addresses,
		isAddresses,
	} = useAddressList();

	const {isCustomSize} = useCustomSize(501);

	return (
		<ListMUI>
			{isAddresses && (
				addresses.map((address, i) => (
					<React.Fragment key={address.id}>
						<AddressItem
							{...address}
						/>
						{isCustomSize && (addresses.length - 1) !== i && <Divider sx={{borderColor: '#C4C4C4'}} />}
					</React.Fragment>
				))
			)}
		</ListMUI>
	);
};

const {
	ListMUI
} = useAddressListStyles();

export default React.memo(AddressList);
