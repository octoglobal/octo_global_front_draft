import { useUserStore } from '@/hooks/useUserStore';
import { translit } from '@/lib/services/services';
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

	const {
		user: {
			name,
			surname,
			personalAreaId
		}
	} = useUserStore();

	return (
		<Collapse in={openRules}>
			<RulesWrapperUI>
				<PromtUI>
					Пример заполнения адреса
				</PromtUI>

				<TableUI>
					<TitleUI>First name (ваше имя)</TitleUI>
					<SubTitleUI>{translit(name)}</SubTitleUI>

					<TitleUI>Last name (ваша фамилия)</TitleUI>
					<SubTitleUI>{translit(surname)}</SubTitleUI>

					<TitleUI>Address line 1 (адрес склада)</TitleUI>
					<SubTitleUI>101 Lukens drive</SubTitleUI>

					<TitleUI>Address line 2 (номер дома)</TitleUI>
					<SubTitleUI sx={{maxWidth: '311px'}}>
						suite H #{personalAreaId} (#{personalAreaId} - это уникальный номер, который вы видите в своем аккаунте. По нему мы узнаем, что это ваша<br/> посылка).
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
					Указанный номер телефона предназначен исключительно для заполнения информации при заказе в магазинах. Если вы хотите связаться с нами, пожалуйста, напишите нам в чат техподдержки
				</SupportPromtUI>

			</RulesWrapperUI>
		</Collapse>
	);
};

export default React.memo(AccountLocationRules);
