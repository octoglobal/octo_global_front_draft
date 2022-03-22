import React, {FC} from 'react';

import AccountSettings from './AccountSettings/AccountSettings';
import AccountLocations from './AccountLocations/AccountLocations';

import {useAccountPersonalDataStyle} from './style';

const AccountPersonalData: FC = () => {

	const {PersonalDataWrapper} = useAccountPersonalDataStyle();

	return (
		<PersonalDataWrapper >
			<AccountSettings />
			<AccountLocations />
		</PersonalDataWrapper>
	);
};

export default React.memo(AccountPersonalData);
