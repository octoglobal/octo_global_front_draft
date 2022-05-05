import { styled ,Backdrop} from '@mui/material';


export const useModalUIStyles = () => {

	const  CustomBackdropMUI = styled(Backdrop)(() => ({
		zIndex: 1,
		color: '#274D82',
		background: 'none',
		backdropFilter: 'blur(3px)',
	
	
       
		'&::before': {
			content: '""',			
			position: 'absolute',			
			zIndex: 0,
			top: 0,
			left: 0,
			width: '100%',
			height: '100vh',
			backgroundColor: 'rgba(255,255,255,0.5)',
			
		}

    	}));
	return {		
		CustomBackdropMUI
	};
};
