import React, {FC} from 'react';

import CustomLinkUI from '../../../../UI/UIComponents/LinkUI/LinkUI';

const HeaderNavLink : FC = () => {
	return (
		<>
			<CustomLinkUI
				href="#"
			>
				Магазины
			</CustomLinkUI>

			<CustomLinkUI
				href="#"
			>
				Калькулятор
			</CustomLinkUI>

			<CustomLinkUI
				href="#"
			>
				Блог
			</CustomLinkUI>

			<CustomLinkUI
				href="#"
			>
				Стоимость услуг
			</CustomLinkUI>

			<CustomLinkUI
				href="#"
			>
				Помощь
			</CustomLinkUI>
		</>
	);
};

export default React.memo(HeaderNavLink);
