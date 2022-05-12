import React, {FC} from 'react';
import {
	useAccountOrdersPlaceholderStyles,
} from '@/components/Account/AccountOrders/AccountOrdersPlaceholder/style';

interface IAccountOrdersPlaceholderProps {
	children?: React.ReactChildren | React.ReactNode;
	text?: string;
}

const AccountOrdersPlaceholder: FC<IAccountOrdersPlaceholderProps> = (
	{
		children,
		text,
	}
) => {
	return (
		<ContainerMUI>
			<BackgroundImageMUI>
				<BackgroundTextContainerMUI>
					{text ? <TextMUI>{text}</TextMUI> : children}
				</BackgroundTextContainerMUI>
			</BackgroundImageMUI>
			<BackgroundTextMUI>
				octo global
			</BackgroundTextMUI>
		</ContainerMUI>
	);
};

const {
	TextMUI,
	ContainerMUI,
	BackgroundImageMUI,
	BackgroundTextMUI,
	BackgroundTextContainerMUI,
} = useAccountOrdersPlaceholderStyles();

export default React.memo(AccountOrdersPlaceholder);
