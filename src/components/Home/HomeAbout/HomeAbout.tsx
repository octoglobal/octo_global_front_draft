import React, {FC} from 'react';
import Container from '@/components/Container/Container';
import HomeAboutLogo from '@/components/Home/HomeAbout/HomeAboutLogo/HomeAboutLogo';
import HomeAboutText from '@/components/Home/HomeAbout/HomeAboutText/HomeAboutText';
import {useHomeAboutStyles} from '@/components/Home/HomeAbout/style';

const HomeAbout: FC = () => {

	const { WrapperMUI } = useHomeAboutStyles();

	return (
		<Container>
			<WrapperMUI>
				<HomeAboutText/>
				<HomeAboutLogo/>
			</WrapperMUI>
		</Container>
	);
};

export default HomeAbout;
