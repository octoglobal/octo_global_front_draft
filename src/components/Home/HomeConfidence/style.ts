import { styled } from '@mui/material';

export const useHomeConfidenceStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		paddingBottom: '80px',
		marginBottom: '60px',
		background: 'url("./image/OctoConfidence.png")',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right top 50px',
		backgroundSize: '681px 482px',
		[theme.breakpoints.down(1113)]: {
			alignItems: 'center',
		},
		[theme.breakpoints.down(1025)]: {
			alignItems: 'center',
			marginBottom: '30px',
			paddingBottom: '0px',
			backgroundSize: '500px 350px',
			backgroundPosition: 'right bottom 35px',
		},
		[theme.breakpoints.down(769)]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
			position: 'relative',
			backgroundSize: '246px 174px',
		},
		[theme.breakpoints.down(351)]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
			position: 'relative',
			backgroundSize: '200px 138px',
		},
	}));

	const OctoTitleMUI = styled('h2')(({theme}) => ({
		fontFamily: 'Playfair Display',
		fontSize: '96px',
		fontWeight: 900,
		lineHeight: '128px',
		opacity: '7%',
		color: '#274D82',
		position: 'absolute',
		left: '-135px',
		top: '160px',
		transform: 'rotate(270deg)',
		[theme.breakpoints.down(1025)]: {
			fontSize: '60px',
			lineHeight: '76px',
			top: '110px',
			left: '-130px',
		},
		[theme.breakpoints.down(769)]: {
			fontSize: '48px',
			lineHeight: '64px',
			top: '112px',
			left: '-90px',
		},
		[theme.breakpoints.down(410)]: {
			top: '135px',
		},
		[theme.breakpoints.down(351)]: {
			fontSize: '36px',
			top: '100px',
			left: '-65px',
			lineHeight: '52px',
		},
	}));

	const OctoContainerMUI = styled('div')(() => ({
		position: 'relative',
	}));

	const ConfidenceTextMUI = styled('div')(() => ({
		// maxWidth: '829px',
		marginRight: '10px'
	}));

	return {
		WrapperMUI,
		OctoTitleMUI,
		OctoContainerMUI,
		ConfidenceTextMUI
	};
};
