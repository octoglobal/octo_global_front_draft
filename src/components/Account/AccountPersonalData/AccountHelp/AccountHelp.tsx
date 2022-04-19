import React, {FC} from 'react';

import VPN from '../../../../UI/UIIcon/VPN.svg';
import Translate from '../../../../UI/UIIcon/Translate.svg';
// import Earth from '../../../../UI/UIIcon/Earth.svg';
import Box3 from '../../../../UI/UIIcon/Box3.svg';
import DopServicesIcon from '@/UIIcon/DopServicesIcont.svg';

import {useAccountHelpStyle} from './style';
import {useCustomSize, useMobile} from '@/hooks/useMedia';

const AccountHelp: FC = () => {

	const {isMobile} = useMobile();
	const {isCustomSize} = useCustomSize(1390);

	return (
		<>
			{!isMobile && !isCustomSize ? (
				<HelpWrapperMUI>

					<HelpItemMUI>
						<HelpImageMUI>
							<DopServicesIcon/>
						</HelpImageMUI>
						<HelperTextMUI>
							Дополнительные<br/>
							услуги
						</HelperTextMUI>
					</HelpItemMUI>

					<HelpItemMUI>
						<HelpImageMUI>
							<Box3/>
						</HelpImageMUI>
						<HelperTextMUI>
							Стоимость<br/>
							почтового отправления
						</HelperTextMUI>
					</HelpItemMUI>

					<HelpItemMUI>
						<HelpImageMUI>
							<VPN/>
						</HelpImageMUI>
						<HelperTextMUI>
							Как подключить VPN
						</HelperTextMUI>
					</HelpItemMUI>

					<HelpItemMUI>
						<HelpImageMUI>
							<Translate/>
						</HelpImageMUI>
						<HelperTextMUI>
							Как перевести<br/>
							страницу на русский
						</HelperTextMUI>
					</HelpItemMUI>

				</HelpWrapperMUI>
			) : null}
		</>
	);
};

export default React.memo(AccountHelp);

const {
	HelpWrapperMUI,
	HelpItemMUI,
	HelpImageMUI,
	HelperTextMUI
} = useAccountHelpStyle();
