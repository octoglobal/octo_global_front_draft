import React from 'react';
import type {NextPage} from 'next';

import ContactsPage from '@/components/ContactsPage/ContactsPage';
import BackgroundWrapper from '@/components/AnyPage/BackgroundWrapper/BackgroundWrapper';

const Contacts: NextPage = () => {

	return (
		<BackgroundWrapper>
			<ContactsPage/>
		</BackgroundWrapper>	
	);
};

export default React.memo(Contacts);
