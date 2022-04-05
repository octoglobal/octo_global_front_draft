import React, {FC} from 'react';
import Container from '@/components/Container/Container';
import HomeAboutLogo from '@/components/Home/HomeAbout/HomeAboutLogo/HomeAboutLogo';
import HomeAboutText from '@/components/Home/HomeAbout/HomeAboutText/HomeAboutText';
import {useHomeAboutStyles} from '@/components/Home/HomeAbout/style';
import HomeAboutAnimation from '@/components/Home/HomeAbout/HomeAboutAnimation/HomeAboutAnimation';

const HomeAbout: FC = () => {

	const { WrapperMUI } = useHomeAboutStyles();

	return (
		<HomeAboutAnimation>
			<Container>
				<WrapperMUI>
					<HomeAboutText/>
					<HomeAboutLogo/>
				</WrapperMUI>
			</Container>
		</HomeAboutAnimation>
	);
};

export default HomeAbout;
