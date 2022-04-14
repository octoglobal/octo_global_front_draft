import React, {FC} from 'react';

import VPN from '../../../../UI/UIIcon/VPN.svg';
import Translate from '../../../../UI/UIIcon/Translate.svg';

import {useAccountHelpStyle} from './style';

const AccountHelp : FC = () => {
	return (
		<HelpWrapperMUI>
			<HelpItemMUI>
				<HelpImageMUI>
					<VPN />
				</HelpImageMUI>
				<HelperTextMUI>
					Как подключить VPN
				</HelperTextMUI>
			</HelpItemMUI>
			<HelpItemMUI>
				<HelpImageMUI>
					<Translate />
				</HelpImageMUI>
				<HelperTextMUI>
					Как перевести страницу на русский
				</HelperTextMUI>
			</HelpItemMUI>
		</HelpWrapperMUI>
	);
};

export default React.memo(AccountHelp);

const {
	HelpWrapperMUI,
	HelpItemMUI,
	HelpImageMUI,
	HelperTextMUI
} = useAccountHelpStyle();
