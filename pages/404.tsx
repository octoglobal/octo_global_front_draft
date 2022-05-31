import React from 'react';
import {NextPage} from 'next';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
const NotFound: NextPage = () => {
	return (
		<HeaderLayout>
			<HeaderMargin/>
			<div>
				404 Not found
			</div>
		</HeaderLayout>
	);
};

export default React.memo(NotFound);
