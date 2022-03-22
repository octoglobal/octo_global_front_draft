import React from 'react';
import {NextPage} from 'next';
import {Box} from '@mui/material';

import AccountPage from '../../src/components/Account/Account';

const Account: NextPage = () => {
	return (
		<Box>
			<AccountPage />
		</Box>
	);
};

export default React.memo(Account);
