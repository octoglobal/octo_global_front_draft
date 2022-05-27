import React from 'react';
import {NextPage} from 'next';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const News: NextPage = () => {
	return (
		<HeaderLayout>
			<h1>
            Пост
			</h1>
		</HeaderLayout>
		
	);
};

export default React.memo(News);
