import React, {FC} from 'react';

import User from '../../../AnyPage/User/User';
import AccountUserForm from '@/components/Account/AccountPersonalData/AccountSettings/AccountUserForm';
import AccountPasswordForm from '@/components/Account/AccountPersonalData/AccountSettings/AccountPasswordForm';

import {useAccountSettingsStyle} from './style';

const AccountSettings: FC = () => {
	const {
		FormTableUserUI,
		SettingsWrapperUI,
		FormsWrapperBoxUI,
	} = useAccountSettingsStyle();

	return (
		<SettingsWrapperUI>
			{/* TODO: вынести форму в другой файл */}
			<FormsWrapperBoxUI>

				<FormTableUserUI>
					<User cutFio={false}/>
				</FormTableUserUI>
				<AccountUserForm />
				<AccountPasswordForm />

			</FormsWrapperBoxUI>
		</SettingsWrapperUI>
	);
};

export default React.memo(AccountSettings);
