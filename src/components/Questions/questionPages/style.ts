import {styled} from '@mui/material';
import { red } from '@mui/material/colors';


export const useQuestionPagesStyles = () => {

	const ContainerMUI = styled('section')(() => ({
		// color: 'red'
	}));
	const ContainerTextMUI = styled('div')(() => ({
		marginBottom: 10
	}));
	const ContainerImgMUI = styled('div')(() => ({
		marginBottom: 15
	}));
	const H3MUI = styled('h3')(() => ({
		
		fontSize: 20,
		fontWeight: 400
	}));
	const ParagraphMUI = styled('p')(() => ({
		fontSize: 20,
		fontWeight: 300,
		lineHeight: '26px',
		marginBottom: 15
	}));
	const ImgMUI = styled('img')(() => ({
		
	}));
	const ContetntLineMUI = styled('div')(() => ({
		display: 'flex',
	}));
	const SvgBlockMUI = styled('div')(({theme}) => ({
		minWidth: 32,
		height: 24,
		marginRight: -30,
		transform: 'translateX(-40px)',
		[theme.breakpoints.down(770)]:{
			marginRight: 10,
			transform: 'translateX(0px)',
		}
	}));
	const SpanMUI = styled('span')(() => ({
		position: 'relative',
		display: 'inline-block',
		width: 20,
		'&>img':{
			position: 'absolute',
			top: -17,
			left: -3
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
