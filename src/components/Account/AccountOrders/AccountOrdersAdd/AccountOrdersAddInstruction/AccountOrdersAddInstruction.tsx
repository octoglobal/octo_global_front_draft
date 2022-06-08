import React from 'react';
import InstructionIcon from '@/UIIcon/InstructionIcon.svg';
import {
	useAccountOrdersAddInstructionStyles
} from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountOrdersAddInstruction/style';
import Link from 'next/link';

const AccountOrdersAddInstruction = () => {
	return (
		<>
			<ItemMUI>
				<Link href='/questions?trackyourorder'>
					<a>
						<IconMUI>
							<InstructionIcon/>
						</IconMUI>
						<TextMUI>
							Как мне отследить свой заказ
						</TextMUI>
					</a>
				</Link>
			</ItemMUI>
		</>
	);
};

const {
	TextMUI,
	ItemMUI,
	IconMUI,
} = useAccountOrdersAddInstructionStyles();

export default React.memo(AccountOrdersAddInstruction);
