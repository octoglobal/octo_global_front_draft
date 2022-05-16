import {styled, Typography} from '@mui/material';

export const useBorderDashedStyle = () => {

	const DashedBoxMUI = styled('div')(({theme}) => ({
		maxWidth: '673px',
		width: 'auto',
		// width: '100%',
		height: 'auto',
		background: '#FFFFFF',
		border: '3.5px dashed rgba(39, 77, 130, 0.5)',
		borderImage: 'url("/image/AddressBorder.png") 3',
		boxSizing: 'border-box',
		borderImageRepeat: 'repeat',

		[theme.breakpoints.down(1024)]: {
			width: '100%',
		},
		[theme.breakpoints.down(800)]: {
			// width: '100%'
		},
		[theme.breakpoints.down(800)]: {
			// width: '500px'
		},
		[theme.breakpoints.down(600)]: {
			// width: '95%'
			// border: '5px dashed #234A82',
		}
	}));

	const ContentMUI = styled('div')(({theme}) => ({
		padding: '25px 30px',

		[theme.breakpoints.down(500)]: {
			padding: '25px 15px',
		}
	}));

	const TypographyMUI = styled(Typography)(({theme}) => ({
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
		textAlign: 'center',

		marginBottom: '25px',

		[theme.breakpoints.down(500)]: {
			fontSize: '16px',
			lineHeight: '19px',
		}
	}));

	return {
		DashedBoxMUI,
		ContentMUI,
		TypographyMUI
	};
};
