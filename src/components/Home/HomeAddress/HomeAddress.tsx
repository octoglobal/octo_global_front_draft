import React from 'react';
import {useHomeAddressStyles} from '@/components/Home/HomeAddress/style';
import Container from '@/components/Container/Container';
import HomeAddressImg from '@/components/Home/HomeAddress/HomeAddressImg/HomeAddressImg';
import HomeAddressText from '@/components/Home/HomeAddress/HomeAdressText/HomeAddressText';

const HomeAddress = () => {

	const {
		TitleMUI,
		AddressWrapperMUI,
		AddressContainerMUI,
	} = useHomeAddressStyles();

	return (
		<AddressContainerMUI>
			<Container>
				<TitleMUI>
					Получите адрес прямо сейчас
				</TitleMUI>
				<AddressWrapperMUI>
					<HomeAddressImg/>
					<HomeAddressText/>
				</AddressWrapperMUI>
			</Container>
		</AddressContainerMUI>
	);
};

export default React.memo(HomeAddress);
