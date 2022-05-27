import React from 'react';
import type {NextPage} from 'next';
import AboutUsPage from '@/components/AboutUsPage/AboutUsPage';
import BackgroundWrapper from '@/components/AnyPage/BackgroundWrapper/BackgroundWrapper';

import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const AboutUs: NextPage = () => {

	return (
		<HeaderLayout>
			<BackgroundWrapper>
				<AboutUsPage/>
			</BackgroundWrapper>

		</HeaderLayout>
	);
};

export default React.memo(AboutUs);
