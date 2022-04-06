import React, {FC} from 'react';
import {useHomeConfidenceStyles} from '@/components/Home/HomeConfidence/style';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import Container from '@/components/Container/Container';
import HomeConfidenceList from '@/components/Home/HomeConfidence/HomeConfidenceList/HomeConfidenceList';
import HomeConfidenceImg from '@/components/Home/HomeConfidence/HomeConfidenceImg/HomeConfidenceImg';

const HomeConfidence: FC = () => {

	const { WrapperMUI } = useHomeConfidenceStyles();

	return (
		<Container>
			<HomeSectionTitle
				title='Почему нам доверяют'
			/>
			<WrapperMUI>
				<HomeConfidenceList/>
				<HomeConfidenceImg/>
			</WrapperMUI>
		</Container>
	);
};

export default React.memo(HomeConfidence);