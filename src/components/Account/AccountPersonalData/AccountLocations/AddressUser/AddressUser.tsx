import React, {FC} from 'react';

import {useAddressUserStyle} from './style';

const AddressUser: FC = () => {

	const {
		FormWrapperUI,
		FormRowTitleUI,
		FormRowTextUI,
	} = useAddressUserStyle();

	return (
		<FormWrapperUI>
			<FormRowTitleUI>Имя</FormRowTitleUI>
			<FormRowTextUI>Anastasia</FormRowTextUI>

			<FormRowTitleUI>Фамилия</FormRowTitleUI>
			<FormRowTextUI>Khorobrykh</FormRowTextUI>

			<FormRowTitleUI>Телефон</FormRowTitleUI>
			<FormRowTextUI>+7 963 785 78 45</FormRowTextUI>

			<FormRowTitleUI>Адрес</FormRowTitleUI>
			<FormRowTextUI>г. Челябинск, ул. Пушкина, д. 52 кв. 88</FormRowTextUI>
		</FormWrapperUI>
	);
};

export default React.memo(AddressUser);
