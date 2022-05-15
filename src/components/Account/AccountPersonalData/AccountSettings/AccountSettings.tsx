import React, {FC} from 'react';

import User from '../../../AnyPage/User/User';
import AccountUserForm from '@/components/Account/AccountPersonalData/AccountSettings/AccountUserForm';
import AccountPasswordForm from '@/components/Account/AccountPersonalData/AccountSettings/AccountPasswordForm';

import {useAccountSettingsStyle} from './style';
import {useUserStore} from '@/hooks/useUserStore';

const AccountSettings: FC = () => {
	const {
		isAdmin
	} = useUserStore();
	return (
		<SettingsWrapperUI>
			<FormsWrapperBoxUI>
				<FormTableUserUI>
					{!isAdmin && (
						<User
							cutFio={false}
							isChangeToAdmin={true}
						/>
					)}
				</FormTableUserUI>
				<AccountUserForm />
				<AccountPasswordForm />
			</FormsWrapperBoxUI>
		</SettingsWrapperUI>
	);
};

const {
	FormTableUserUI,
	SettingsWrapperUI,
	FormsWrapperBoxUI,
} = useAccountSettingsStyle();

export default React.memo(AccountSettings);
