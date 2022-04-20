import {styled} from '@mui/material';

export const useBlogPageStyle = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		margin: '40px 0 20px',
		[theme.breakpoints.down(769)]: {
			marginTop: '0px',
		}
	}));


	return {
		ContainerMUI,
	};
};
