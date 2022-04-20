import {styled, Typography} from '@mui/material';

export const useAccountLocationRulesStyle = () => {


	const RulesWrapperUI = styled('div')(() => ({
		margin: '20px 0px 0px'
	}));

	const PromtUI = styled(Typography)(() => ({
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '21px',
		color: '#234A82',

		marginBottom: '25px'

	}));

	const TableUI = styled('div')(({theme}) => ({
		display: 'grid',
		gridTemplateColumns: '272px 382px',
		gridTemplateRows: 'auto auto auto auto auto auto auto auto',
		gridColumnGap: '20px',
		gridRowGap: '15px',
		marginBottom: '15px',

		// border: '1px solid green',

		[theme.breakpoints.down(800)]: {
			gridTemplateColumns: 'auto',
		},
		[theme.breakpoints.down(500)]: {
			gridTemplateColumns: 'auto',
			gridRowGap: '5px',
		},
		[theme.breakpoints.down(320)]: {
			gridTemplateColumns: '100%',
			gridRowGap: '5px',
		}
	}));

	const TitleUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',

		width: '100%',

		// border: '1px solid red',

		'& > div': {
			marginBottom: '15px',
		}
	}));

	const SubTitleUI = styled('div')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		color: '#000000',

		// border: '1px solid purple',

		'& > div': {
			marginBottom: '15px',
		},
		[theme.breakpoints.down(500)]: {
			marginBottom: '15px',
		}
	}));


	const SupportPromtUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',

		color: '#000000',
	}));

	return {
		RulesWrapperUI,
		PromtUI,
		TableUI,
		TitleUI,
		SubTitleUI,
		SupportPromtUI
	};
};
