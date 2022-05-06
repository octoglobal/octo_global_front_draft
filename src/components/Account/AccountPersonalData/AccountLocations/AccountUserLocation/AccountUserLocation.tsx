import React, {FC} from 'react';

import BorderDashed from '@/components/AnyPage/Wrappers/BorderDashed/BorderDashed';
import LocationForm from '@/components/Account/AccountPersonalData/AccountLocations/LocationForm/LocationForm';

import {useAccountUserLocationStyle} from './style';

const AccountUserLocation: FC = () => {

	return (
		<ContentMUI>
			<BorderDashed title="Ваш адрес для отправки посылки">
				<LocationForm />
			</BorderDashed>
		</ContentMUI>

	);
};

const {
	ContentMUI
} = useAccountUserLocationStyle();

export default React.memo(AccountUserLocation);
