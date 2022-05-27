import React from 'react';
import {NextPage} from 'next';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const InternetError: NextPage = () => {
	return (
		<HeaderLayout>
			<div>
			500 error
			</div>
		</HeaderLayout>
	);
};

export default React.memo(InternetError);
