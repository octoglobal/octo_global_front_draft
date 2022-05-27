import React from 'react';
import {NextPage} from 'next';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const NotFound: NextPage = () => {
	return (
		<HeaderLayout>
			<div>
			not found
			</div>
		</HeaderLayout>
	);
};

export default React.memo(NotFound);
