import {Button, styled} from '@mui/material';

export const useBlogPhotoStyles = () => {

	const PhotoContainerMUI = styled('div')(({theme}) => ({
		position: 'relative',
		marginBottom: '30px',
		maxWidth:' 112px',
		margin: '0 auto 30px',
		[theme.breakpoints.down(501)]: {
			margin: '0 0 20px',
		}
	}));

	const PhotoInputFileMUI = styled('input')(() => ({
		width: '0px',
		height: '0px',
		visible: 'hidden',
	}));

	const PhotoButtonMUI = styled('img')(() => ({
		width: '112px',
		height: '130px',
		objectFit: 'cover',
	}));

	const UploadButtonMUI = styled(Button)(() => ({
		width: '112px',
		height: '130px',
		border: 0,
		backgroundColor: 'transparent'
	}));

	const DeleteButtonMUI = styled(Button)(() => ({
		position: 'absolute',
		right: '-15px',
		top: '-15px',
		border: 0,
		minWidth: 'auto',
		zIndex: 1,
		'& > svg': {
			transform: 'rotate(45deg)'
		}
	}));


	return {
		PhotoButtonMUI,
		UploadButtonMUI,
		DeleteButtonMUI,
		PhotoInputFileMUI,
		PhotoContainerMUI,
	};
};
