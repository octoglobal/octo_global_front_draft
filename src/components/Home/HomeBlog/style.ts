import { styled } from '@mui/material';

export const useHomeBlogStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		marginBottom: '90px',
	}));

	const SwiperContainerMUI = styled('div')(({theme}) => ({
		margin: '0 auto 53px',
		maxWidth: '1150px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& > .swiper': {
			'& > .swiper-button-next, & > .swiper-button-prev': {
				top: '45%',
				'&::after': {
					fontSize: '30px',
					color: '#274D82',
				}
			}
		},
		[theme.breakpoints.down(1025)]: {
			marginBottom: '32px'
		}
	}));

	return {
		ContainerMUI,
		SwiperContainerMUI
	};
};
