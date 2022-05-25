import React from 'react';
import type {NextPage} from 'next';

import ContactsPage from '@/components/ContactsPage/ContactsPage';

const Contacts: NextPage = () => {

	return (
		<ContactsPage/>
		
	);
};

export default React.memo(Contacts);
