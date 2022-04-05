import React, {FC} from 'react';
import Container from '@/components/Container/Container';
import HomeWorkExpImg from '@/components/Home/HomeWorkExp/HomeWorkExpImg/HomeWorkExpImg';
import HomeWorkExpList from '@/components/Home/HomeWorkExp/HomeWorkExpList/HomeWorkExpList';
import {useHomeWorkExpStyles} from '@/components/Home/HomeWorkExp/style';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';

const HomeWorkExp: FC = () => {

	const {
		WrapperMUI
	} = useHomeWorkExpStyles();

	return (
		<Container>
			<HomeSectionTitle
				title='Как это работает'
			/>
			<WrapperMUI>
				<HomeWorkExpImg/>
				<HomeWorkExpList/>
			</WrapperMUI>
		</Container>
	);
};

export default React.memo(HomeWorkExp);
