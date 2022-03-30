import React from 'react';
import type {NextPage} from 'next';
import ContentLayout from '@/layout/ContentLayout/ContentLayout';

const PrivacyPolicy: NextPage = () => {

	return (
		<ContentLayout>
			<h1>PrivacyPolicy</h1>
		</ContentLayout>
	);
};

export default React.memo(PrivacyPolicy);
