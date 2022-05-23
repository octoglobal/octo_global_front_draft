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
import LinkUI from 'UI/UIComponents/LinkUI/LinkUI';

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
					<HelperTextMUI>
						<LinkUI href='/questions?costServices'>Дополнительные услуги</LinkUI>						
					</HelperTextMUI>
				</HelpItemMUI>

				<HelpItemMUI>
					<HelpImageMUI>
						{isCustomSize ? <Box3Small /> : <Box3 />}
					</HelpImageMUI>
					<HelperTextMUI>
						<LinkUI href='/questions?transfer'> Стоимость почтового отправления</LinkUI>					
					</HelperTextMUI>
				</HelpItemMUI>

				<HelpItemMUI>
					<HelpImageMUI>
						{isCustomSize ? <VPNsmall /> : <VPN />}
					</HelpImageMUI>
					<HelperTextMUI>
						<LinkUI href='/questions?vpn'>Как подключить VPN</LinkUI>
					</HelperTextMUI>			
					
				</HelpItemMUI>

				<HelpItemMUI>
					<HelpImageMUI>
						{isCustomSize ? <TranslateSmall /> : <Translate />}
					</HelpImageMUI>
					<HelperTextMUI>
						<LinkUI href='/questions?translate'><a>Как перевести сайт на русский</a></LinkUI>						
					</HelperTextMUI>
				</HelpItemMUI>
			</HelpWrapperMUI>
		</>
	);
};

export default React.memo(AccountHelp);

const { HelpWrapperMUI, HelpItemMUI, HelpImageMUI, HelperTextMUI } =
    useAccountHelpStyle();
