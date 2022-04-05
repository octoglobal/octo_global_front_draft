import React from 'react';
import {useHomeAddressTextStyles} from '@/components/Home/HomeAddress/HomeAdressText/style';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';

const HomeAddressText = () => {
	const {
		buttonSx,
		ContainerMUI,
		ParagraphMUI,
		ButtonWrapperMUI
	} = useHomeAddressTextStyles();

	return (
		<ContainerMUI>
			<ParagraphMUI>
				Цепляющий текст Цепляющий текстЦепляющий текстЦепляющий текстЦепляющий текстЦепляющий
			</ParagraphMUI>
			<ButtonWrapperMUI>
				<ButtonUI sx={buttonSx}>
					Регистрация
				</ButtonUI>
			</ButtonWrapperMUI>
		</ContainerMUI>
	);
};

export default React.memo(HomeAddressText);
