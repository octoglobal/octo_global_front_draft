import React from 'react';
import type {NextPage} from 'next';

import LawInfoPage from '@/components/LawInfo/LawInfo';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';

const LawInfo: NextPage = () => {

	return (
		<HeaderLayout >
			<LawInfoPage/>
		</HeaderLayout>
		
	);
};

export default React.memo(LawInfo);
