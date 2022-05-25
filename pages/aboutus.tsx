import React from 'react';
import type {NextPage} from 'next';
import AboutUsPage from '@/components/AboutUsPage/AboutUsPage';
import BackgroundWrapper from '@/components/AnyPage/BackgroundWrapper/BackgroundWrapper';


const AboutUs: NextPage = () => {

	return (
		<BackgroundWrapper>
			<AboutUsPage/>
		</BackgroundWrapper>
	);
};

export default React.memo(AboutUs);
