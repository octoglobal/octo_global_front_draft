import React from 'react';
import type {NextPage} from 'next';
import {styled, Typography} from '@mui/material';
import {useCustomRouter} from '@/hooks/useCustomRouter';

import ButtonUI from '../src/UI/UIComponents/ButtonUI/ButtonUI';
import Octo_Shop from '../src/UI/UIIcon/Octo_Shop.svg';

const BoxUI = styled('div')(({theme}) => ({
	fontWeight: '500',
	fontSize: '36px',
	lineHeight: '42px',

	color: '#000000',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	marginTop: '100px',

	[theme.breakpoints.down(1024)]: {
		margin: '40px 0',

		fontSize: '24px',
		lineHeight: '26px',
	},

	[theme.breakpoints.down(500)]: {
		marginTop: '40px',

		fontSize: '24px',
		lineHeight: '26px',
	}
}));

const TextMUI = styled(Typography)(() => ({
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: '400',
	fontSize: '36px',
	lineHeight: '42px',
	textAlign: 'center',
	color: '#000000',
}));

const BoxWrapperUI = styled('div')(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	margin: '60px 0',

	[theme.breakpoints.down(500)]: {
		width: '100%',
	}
}));

const OctoImageMUI = styled('div')(({theme}) => ({
	width: '291px',
	height: '245px',

	alignSelf: 'center',
	margin: '11px 0 56px',

	[theme.breakpoints.down(1024)]: {
		marginBottom: '15px',
	},

}));

const Welcome: NextPage = () => {

	const {pushTo} = useCustomRouter();

	const handlerPushToIndex = () => {
		pushTo('/shops');
	};

	return (
		<BoxUI>
			<BoxWrapperUI>
				<TextMUI>
					Приветствуем вас<br />
					на самом лучшем<br />
					сайте для шоппинга в Европе!
				</TextMUI>
				<OctoImageMUI>
					<Octo_Shop />
				</OctoImageMUI>

				<ButtonUI
					onClick={handlerPushToIndex}
					style={{
						width: '161px',
						height: '40px',
						opacity: '0.8',
						alignSelf: 'center',
					}}
				>
					За покупками!
				</ButtonUI>
			</BoxWrapperUI>
		</BoxUI>
	);
};

export default React.memo(Welcome);
