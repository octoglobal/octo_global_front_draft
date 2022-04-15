import React from 'react';
import {useShopsNotFoundStyles} from '@/components/Shops/ShopsNotFound/style';

const ShopsNotFound = () => {


	return (
		<WrapperMUI>
			<TextMUI>
				По вашему запросу ничего не найдено
			</TextMUI>
		</WrapperMUI>
	);
};


const {
	TextMUI,
	WrapperMUI,
} = useShopsNotFoundStyles();

export default React.memo(ShopsNotFound);
