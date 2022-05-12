import React from 'react';
import type {NextPage} from 'next';
import AboutUsPage from '@/components/AboutUsPage/AboutUsPage';

const AboutUs: NextPage = () => {

	return (
		<AboutUsPage/>
	);
};

export default React.memo(AboutUs);
