import React from 'react';
import type {NextPage} from 'next';
import ContentLayout from '@/layout/ContentLayout/ContentLayout';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const PrivacyPolicy: NextPage = () => {

	return (
		<HeaderLayout>
			<ContentLayout>
				<h1>PrivacyPolicy</h1>
			</ContentLayout>
		</HeaderLayout>
		
	);
};

export default React.memo(PrivacyPolicy);
