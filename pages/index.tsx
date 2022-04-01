import React from 'react';
import type {NextPage} from 'next';

import IndexPage from '../src/components/Index/Index';

const Home: NextPage = () => {

	return (
		<IndexPage />
	);
};

export default React.memo(Home);
