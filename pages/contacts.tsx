import React from 'react';
import type {NextPage} from 'next';

import ContactsPage from '@/components/ContactsPage/ContactsPage';
import BackgroundWrapper from '@/components/AnyPage/BackgroundWrapper/BackgroundWrapper';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Contacts: NextPage = () => {

	return (
		<HeaderLayout>
			<BackgroundWrapper>
				<ContactsPage/>
			</BackgroundWrapper>
		</HeaderLayout>
		
	);
};

export default React.memo(Contacts);
