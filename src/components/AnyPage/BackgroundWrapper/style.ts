import { styled } from '@mui/material';

export const useBackgroundWrapperStyle = () => {
	const BackgroundWrapperMUI = styled('div')(({theme})=>({
		position:'relative',
		height:'100%',
		background: 'url("./image/OctoConfidence.png")',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'right 0px top 210px',
		backgroundSize: '681px 482px',
		[theme.breakpoints.down(1360)]:{
			backgroundPosition: 'right 0 top 150px',
		},
		[theme.breakpoints.down(1220)]:{
			backgroundSize: '500px 354px',
			backgroundPosition: 'right 0 top 180px',
		},
		[theme.breakpoints.down(720)]:{
			backgroundSize: '290px 205px',
			backgroundPosition: 'left 50% top 180px',
		},
		[theme.breakpoints.down(391)]:{
			backgroundSize: '290px 205px',
			backgroundPosition: 'left 50% top 180px',
		}
	}),);

	const BackgroundTitleMUI = styled('h2')(({theme})=>({
		fontFamily: 'Playfair Display',
		fontSize: '96px',
		fontWeight: 900,
		lineHeight: '128px',
		opacity: '7%',
		color: '#274D82',
		position: 'absolute',
		left: '-135px',
		top: '390px',
		transform: 'rotate(270deg)',
		[theme.breakpoints.down(1360)]:{
			top: '343px',
		},
		[theme.breakpoints.down(720)]:{
			fontSize: '32px',
			left: '32%',
			transform: 'rotate(0)',
			top: '343px',
		},
		[theme.breakpoints.down(391)]:{
			fontSize: '32px',
			left: '25%',
			transform: 'rotate(0)',
			top: '343px',
		}
	}));

	return ({BackgroundWrapperMUI, BackgroundTitleMUI});
};