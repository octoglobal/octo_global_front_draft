import React from 'react';
import type {NextPage} from 'next';
import ContentLayout from '@/layout/ContentLayout/ContentLayout';

const Home: NextPage = () => {

	return (
		<ContentLayout>
			<h1>Главная</h1>
		</ContentLayout>
	);
};

export default React.memo(Home);
