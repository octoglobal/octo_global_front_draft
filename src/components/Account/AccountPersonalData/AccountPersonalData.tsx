import React, {FC} from 'react';

import AccountSettings from './AccountSettings/AccountSettings';
import AccountLocations from './AccountLocations/AccountLocations';
// import AccountAddressUserArray from '../AccountPersonalData/AccountLocations/AccountAddressUserData.json';

import {useAccountPersonalDataStyle} from './style';
import AccountHelp from '@/components/Account/AccountPersonalData/AccountHelp/AccountHelp';
import AccountUserLocation
	from '@/components/Account/AccountPersonalData/AccountLocations/AccountUserLocation/AccountUserLocation';

const AccountPersonalData: FC = () => {

	return (
		<>
			<PersonalDataWrapperUI>
				<AccountSettings/>
				<AccountLocationsMUI>
					<AccountLocations/>
					<AccountUserLocation />
				</AccountLocationsMUI>
			</PersonalDataWrapperUI>
			<AccountHelp/>
		</>
	);
};

export default React.memo(AccountPersonalData);

const {
	PersonalDataWrapperUI,
	AccountLocationsMUI
} = useAccountPersonalDataStyle();
