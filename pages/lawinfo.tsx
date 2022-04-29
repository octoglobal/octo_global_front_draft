import React from 'react';
import type {NextPage} from 'next';

import LawInfoPage from '@/components/LawInfo/LawInfo';

const LawInfo: NextPage = () => {

	return (
		<LawInfoPage/>
	);
};

export default React.memo(LawInfo);
