import { styled } from '@mui/material';

export const useShopsPageStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		marginTop: '49px',
		[theme.breakpoints.down(769)]: {
			marginTop: '0',
		}
	}));

	const FormMUI = styled('form')(() => ({
	}));

	const SearchWrapperMUI = styled('div')(({theme}) => ({
		maxWidth: '976px',
		width: '100%',
		margin: '0 auto',
		[theme.breakpoints.down(1200)]: {
			padding: '0 40px',
		},
		[theme.breakpoints.down(1025)]: {
			padding: '0',
		}
	}));

	const ContainerSwiperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		alignItems: 'center',
		'& > .swiper': {
			paddingBottom: '2px',
			border: '1px solid #FFFFFF',
			boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.05)',
			'& > div.swiper-wrapper': {
				'& > div': {
					paddingRight: '15px',
				},
				'& > *:last-child': {
					marginRight: '0'
				}
			}
		},
		[theme.breakpoints.down(1025)]: {
			padding: '0 13px',
			'& > .swiper': {
				'& > div.swiper-wrapper': {
					'& > div': {
						paddingRight: '10px',
					},
				}
			}

		},
	}));

	const ContainerTagsMUI = styled('div')(() => ({
		position: 'relative',
		display: 'flex',
		margin: '0 auto',
		flexDirection: 'column',
		maxWidth: '1107px',
	}));

	return {
		FormMUI,
		ContainerMUI,
		SearchWrapperMUI,
		ContainerTagsMUI,
		ContainerSwiperMUI,
	};
};
