import React, {FC} from 'react';
import {useHomeAboutLogoStyles} from '@/components/Home/HomeAbout/HomeAboutLogo/style';
import OctoGlobal from '../../../../UI/UIIcon/OctoGlobalLogo.svg';

const HomeAboutLogo: FC = () => {

	const {
		logoSx,
		TextMUI,
		ContainerMUI,
	} = useHomeAboutLogoStyles();

	return (
		<ContainerMUI>
			<OctoGlobal style={logoSx} />
			<TextMUI>
				octo global
			</TextMUI>
		</ContainerMUI>
	);
};

export default HomeAboutLogo;
