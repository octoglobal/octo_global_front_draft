import React from 'react';
import type {NextPage} from 'next';

import IndexPage from '../src/components/Index/Index';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Home: NextPage = () => {

	return (
		<HeaderLayout>
			<IndexPage />
		</HeaderLayout>
		
	);
};

export default React.memo(Home);
