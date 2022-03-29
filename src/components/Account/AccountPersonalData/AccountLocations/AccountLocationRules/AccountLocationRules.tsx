import { Collapse } from '@mui/material';
import React, {FC} from 'react';

import {useAccountLocationRulesStyle} from './style';

interface IAccountLocationRules {
	openRules: boolean
}

const AccountLocationRules: FC<IAccountLocationRules> = ({openRules}) => {

	const {
		RulesWrapperUI,
		PromtUI,
		TableUI,
		TitleUI,
		SubTitleUI,
		SupportPromtUI
	} = useAccountLocationRulesStyle();

	return (
		<Collapse in={openRules}>
			<RulesWrapperUI>
				<PromtUI>
					На сайтах магазинов он заполняется следующим образом:
				</PromtUI>

				<TableUI>
					<TitleUI>First name (ваше имя)</TitleUI>
					<SubTitleUI>Anastasia</SubTitleUI>

					<TitleUI>Last name (ваша фамилия)</TitleUI>
					<SubTitleUI>Khorobrykh</SubTitleUI>

					<TitleUI>Address line 1 (адрес склада)</TitleUI>
					<SubTitleUI>101 Lukens drive</SubTitleUI>

					<TitleUI>Address line 2 (номер дома)</TitleUI>
					<SubTitleUI>
						suite H #174555 (#174555 - это уникальный номер, который вы видите в своем аккаунте. По нему мы узнаем, что это ваша посылка).
					</SubTitleUI>

					<TitleUI>City (город)</TitleUI>
					<SubTitleUI>New Castle</SubTitleUI>

					<TitleUI>State (штат)</TitleUI>
					<SubTitleUI>Delaware (DE)</SubTitleUI>

					<TitleUI>Zip code (индекс)</TitleUI>
					<SubTitleUI>19720</SubTitleUI>

					<TitleUI>Phone number (телефон)</TitleUI>
					<SubTitleUI>+1-929-999-57-97</SubTitleUI>

				</TableUI>

				<SupportPromtUI>
					Указанный номер телефона преднозначен исключительно для заполнения информации при заказе в магазинах. Если вы хотите связаться с нами, пожалуйста, напишите нам в чат техподдержки
				</SupportPromtUI>

			</RulesWrapperUI>
		</Collapse>
	);
};

export default React.memo(AccountLocationRules);