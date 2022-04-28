import React, { FC } from 'react';

import VPN from '../../../../UI/UIIcon/VPN.svg';
import VPNsmall from '../../../../UI/UIIcon/VPNsmall.svg';
import Translate from '../../../../UI/UIIcon/Translate.svg';
import TranslateSmall from '../../../../UI/UIIcon/TranslateSmall.svg';
// import Earth from '../../../../UI/UIIcon/Earth.svg';
import Box3 from '../../../../UI/UIIcon/Box3.svg';
import Box3Small from '../../../../UI/UIIcon/Box3Small.svg';
import DopServicesIcon from '@/UIIcon/DopServicesIcont.svg';
import DopServicesIconSmall from '@/UIIcon/DopServicesIconSmall.svg';

import { useAccountHelpStyle } from './style';
import { useCustomSize } from '@/hooks/useMedia';

const AccountHelp: FC = () => {
	const { isCustomSize } = useCustomSize(600);

	return (
		<>
			<HelpWrapperMUI>
				<HelpItemMUI>
					<HelpImageMUI>
						{isCustomSize ? (
							<DopServicesIconSmall />
						) : (
							<DopServicesIcon />
						)}
					</HelpImageMUI>
					<HelperTextMUI>Дополнительные услуги</HelperTextMUI>
				</HelpItemMUI>

				<HelpItemMUI>
					<HelpImageMUI>
						{isCustomSize ? <Box3Small /> : <Box3 />}
					</HelpImageMUI>
					<HelperTextMUI>
                        Стоимость почтового отправления
					</HelperTextMUI>
				</HelpItemMUI>

				<HelpItemMUI>
					<HelpImageMUI>
						{isCustomSize ? <VPNsmall /> : <VPN />}
					</HelpImageMUI>
					<HelperTextMUI>Как подключить VPN</HelperTextMUI>
				</HelpItemMUI>

				<HelpItemMUI>
					<HelpImageMUI>
						{isCustomSize ? <TranslateSmall /> : <Translate />}
					</HelpImageMUI>
					<HelperTextMUI>
                        Как перевести страницу на русский
					</HelperTextMUI>
				</HelpItemMUI>
			</HelpWrapperMUI>
		</>
	);
};

export default React.memo(AccountHelp);

const { HelpWrapperMUI, HelpItemMUI, HelpImageMUI, HelperTextMUI } =
    useAccountHelpStyle();
