import { styled } from '@mui/material';

export const useShopsPageStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		marginTop: '49px',
	}));

	const FormMUI = styled('form')(() => ({
	}));

	const SearchWrapperMUI = styled('div')(() => ({
		maxWidth: '976px',
		width: '100%',
		margin: '0 auto',
	}));

	const ContainerSwiperMUI = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
		maxWidth: '1107px',
		margin: '0 auto',
		'& > .swiper': {
			paddingBottom: '2px',
			border: '1px solid #FFFFFF',
			boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.05)',
			'& > div.swiper-wrapper': {
				'& > div': {
					marginRight: '15px',
				},
				'& > *:last-child': {
					marginRight: '0'
				}
			}
		}
	}));

	return {
		FormMUI,
		ContainerMUI,
		SearchWrapperMUI,
		ContainerSwiperMUI,
	};
};
