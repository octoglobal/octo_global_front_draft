import React from 'react';
import {NextPage} from 'next';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
const InternetError: NextPage = () => {
	return (
		<HeaderLayout>
			<HeaderMargin/>
			<div>
			500 error
			</div>
		</HeaderLayout>
	);
};

export default React.memo(InternetError);
