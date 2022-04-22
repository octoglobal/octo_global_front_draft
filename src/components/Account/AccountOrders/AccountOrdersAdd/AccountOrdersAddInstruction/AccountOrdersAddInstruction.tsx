import React from 'react';
import InstructionIcon from '@/UIIcon/InstructionIcon.svg';
import InvoiseIcon from '@/UIIcon/InvoiseIcon.svg';
import {
	useAccountOrdersAddInstructionStyles
} from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountOrdersAddInstruction/style';
import Link from 'next/link';

const AccountOrdersAddInstruction = () => {
	return (
		<>
			<ItemMUI>
				<Link href='/questions'>
					<a>
						<IconMUI>
							<InstructionIcon/>
						</IconMUI>
						<TextMUI>
							Инструкция заполнения
						</TextMUI>
					</a>
				</Link>
			</ItemMUI>
			<ItemMUI>
				<Link href='/questions'>
					<a>
						<IconMUI>
							<InvoiseIcon/>
						</IconMUI>
						<TextMUI>
							Инвойс
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
