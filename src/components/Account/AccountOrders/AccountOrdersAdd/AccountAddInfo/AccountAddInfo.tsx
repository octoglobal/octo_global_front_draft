import React from 'react';
import InfoIcon from '@/UIIcon/Info.svg';
import {useAccountAddInfoStyles} from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountAddInfo/style';

const AccountAddInfo = () => {
	return (
		<ContainerMUI>
			<IconMUI>
				<InfoIcon/>
			</IconMUI>
			<TextMUI>
				<TextPartOneSpanMUI>
					Чтобы мы не потеряли ваш заказ, пришлите нам на почту&nbsp;
				</TextPartOneSpanMUI>
				<EmailLinkMUI
					href='mailto:delivery@octo.global'
				>
					delivery@octo.global
					<DotTextSpanMUI>,</DotTextSpanMUI>
				</EmailLinkMUI>
				&nbsp;подтверждение от интернет магазина
			</TextMUI>
		</ContainerMUI>
	);
};

const {
	TextMUI,
	IconMUI,
	EmailLinkMUI,
	ContainerMUI,
	DotTextSpanMUI,
	TextPartOneSpanMUI,
} = useAccountAddInfoStyles();

export default React.memo(AccountAddInfo);
