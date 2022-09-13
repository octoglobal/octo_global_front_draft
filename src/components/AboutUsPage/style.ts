import { styled } from '@mui/material';

export const useAboutUsStyle = () => {
	const ContainerMUI = styled('div')(() => ({
		maxWidth: '778px',
		margin: '25px auto 0',
	}));
	const AboutContainerMUI = styled('div')(( {theme})=>({
		maxWidth: '778px',
		margin: '117px auto 200px',
		minHeight: '530px',
		[theme.breakpoints.down(1360)]:{
			margin:'60px auto 80px',
		},
		
		[theme.breakpoints.down(961)]:{
			margin:'40px 0px 70px 0px',
			padding: '0px 28px',
		},
		[theme.breakpoints.down(391)]:{
			margin:'40px 0px 70px 0px',
			padding: '0px 27px',
		}
	}));
	const AboutTitleMUI = styled('h1')(({theme}) => ({
		fontSize: '32px',
		fontWeight: 400,
		textAlign:'center',
		lineHeight:'117%',
		margin: '0px 0px 25px 0px',
		padding: '0px 0px 0px 0px',
		[theme.breakpoints.down(961)]:{
			fontSize: '28px',
		},
		[theme.breakpoints.down(391)]:{
			fontSize: '24px',
		}
	}));
	const ParagraphMUI = styled('p')(({theme}) => ({
		fontSize: '20px',
		fontWeight: 300,
		marginBottom: 20,
		lineHeight: '117%',
		textAlign: 'justify',
		[theme.breakpoints.down(961)]:{
			fontSize: '18px',
		},
		[theme.breakpoints.down(391)]:{
			fontSize: '16px',
		},
	}));
	const HighlightSpanMUI = styled('span')(()=>({
		color: 'rgba(39, 77, 130, 1)'
	}));
	return {
		ContainerMUI,
		AboutContainerMUI,
		AboutTitleMUI,
		ParagraphMUI,
		HighlightSpanMUI,
	};
};
