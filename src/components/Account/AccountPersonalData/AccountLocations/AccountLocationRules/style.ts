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

	const TableUI = styled('div')(() => ({
		display: 'grid',
		gridTemplateColumns: '250px 382px',
		gridTemplateRows: 'auto auto auto auto auto auto auto auto',
		gridColumnGap: '20px',
		gridRowGap: '15px',
		marginBottom: '15px'

	}));

	const TitleUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '21px',
		color: '#000000',

		'& > div': {
			marginBottom: '15px',
		}
	}));

	const SubTitleUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		color: '#000000',

		'& > div': {
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
