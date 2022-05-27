import React from 'react';
import {NextPage} from 'next';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Account: NextPage = () => {
	return (
		<HeaderLayout>
			<div>
				Аккаунт
			</div>
		</HeaderLayout>
		
	);
};

export default React.memo(Account);
