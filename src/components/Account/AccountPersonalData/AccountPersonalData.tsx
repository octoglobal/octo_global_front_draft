import React, {FC} from 'react';

import AccountSettings from './AccountSettings/AccountSettings';
import AccountLocations from './AccountLocations/AccountLocations';
// import AccountAddressUserArray from '../AccountPersonalData/AccountLocations/AccountAddressUserData.json';

import {useAccountPersonalDataStyle} from './style';

const AccountPersonalData: FC = () => {

	const {PersonalDataWrapperUI} = useAccountPersonalDataStyle();

	return (
		<PersonalDataWrapperUI >
			<AccountSettings />
			<AccountLocations />
		</PersonalDataWrapperUI>
	);
};

export default React.memo(AccountPersonalData);
