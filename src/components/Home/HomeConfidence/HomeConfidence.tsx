import React, {FC} from 'react';
import {useHomeConfidenceStyles} from '@/components/Home/HomeConfidence/style';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import Container from '@/components/Container/Container';
import HomeConfidenceList from '@/components/Home/HomeConfidence/HomeConfidenceList/HomeConfidenceList';

const HomeConfidence: FC = () => {


	return (
		<Container>
			<WrapperMUI>
				<ConfidenceTextMUI>
					<HomeSectionTitle
						title='Почему выбирают нас'
					/>
					<OctoContainerMUI>
						<OctoTitleMUI>
							octo global
						</OctoTitleMUI>
						<HomeConfidenceList/>
					</OctoContainerMUI>
				</ConfidenceTextMUI>
				{/*<HomeConfidenceImg/>*/}
			</WrapperMUI>
		</Container>
	);
};

const {
	WrapperMUI,
	OctoTitleMUI,
	OctoContainerMUI,
	ConfidenceTextMUI
} = useHomeConfidenceStyles();


export default React.memo(HomeConfidence);
