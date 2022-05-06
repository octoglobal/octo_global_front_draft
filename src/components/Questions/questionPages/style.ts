import {styled} from '@mui/material';



export const useQuestionPagesStyles = () => {

	const ContainerMUI = styled('section')(() => ({
		// color: 'red'
		
	}));
	const ContainerTextMUI = styled('div')(() => ({
		marginBottom: 10
	}));
	const ContainerImgMUI = styled('div')(({theme}) => ({
		marginBottom: 15,
		display: 'flex',	
		alignItems: 'center',
		'&>img:nth-of-type(2)':{
			marginTop: 114
		},
		[theme.breakpoints.down(820)]:{
			display: 'none'
		}
	}));
	const H3MUI = styled('h3')(() => ({		
		fontSize: 20,
		fontWeight: 400,
		marginLeft:10
	}));
	const ParagraphMUI = styled('p')(({theme}) => ({
		fontSize: 20,
		fontWeight: 300,
		lineHeight: '26px',
		marginBottom: 15,
		[theme.breakpoints.down(500)]:{
			fontSize: 16,
			lineHeight: '20.8px',
		}
	}));
	const ImgMUI = styled('img')(({theme}) => ({
		[theme.breakpoints.down(820)]:{
			display: 'none'
		}
		
	}));
	const ContetntLineMUI = styled('div')(() => ({
		display: 'flex',
	}));
	const SvgBlockMUI = styled('div')(({theme}) => ({
		minWidth: 32,
		height: 24,
		maxWidth:32,		
		marginRight: 10,		
		[theme.breakpoints.down(500)]:{
			display: 'none'
		}
	}));
	const SpanMUI = styled('span')(({theme}) => ({
		position: 'relative',
		display: 'inline-block',
		width: 20,
		'&>img':{
			position: 'absolute',
			top: -17,
			left: -3,
			
		},
		[theme.breakpoints.down(820)]:{
			width: 0,
		}
		
	}));
	return {
		ContainerMUI,
		H3MUI,
		ParagraphMUI,
		ContainerTextMUI,
		ContainerImgMUI,
		ImgMUI,
		ContetntLineMUI,
		SvgBlockMUI,
		SpanMUI
	};
};
