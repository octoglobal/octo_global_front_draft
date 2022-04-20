import { styled } from '@mui/material';
import { keyframes } from '@mui/material';
import {isTopStateDirection} from '@/components/AnyPage/ScrollTop/useScrollTop';

export const useScrollTopStyles = () => {

	const animTrueDesc = keyframes`
      from {
        opacity: 0;
		transform: translateX(-100px);
      }
      to {
        opacity: 1;
        transform: translateX(0px);
      }
	`;

	const animTrueMobile = keyframes`
		from {
			opacity: 0;
			transform: translateX(100px);
		}
		to {
			opacity: 1;
			transform: translateX(0px);
		}
	`;

	const animFalseDesc = keyframes`
      from {
        opacity: 1;
		transform: translateX(0px);
      }
      to {
        opacity: 0;
        transform: translateX(-100px);
      }
	`;

	const animFalseMobile = keyframes`
		from {
			opacity: 1;
			transform: translateX(0px);
		}
		to {
			opacity: 0;
			transform: translateX(100px);
		}
	`;

	const animUndefined = keyframes`
      from {
        opacity: 1;
        transform: translateX(0px);
      } 
	  to {
		opacity: 0;
		transform: translateX(-100px);
	  }
	`;


	const animationVisible = (direction: isTopStateDirection, render: number, isMobile: boolean) => {
		if (render === 1) return {
			opacity: 0,
		};

		const animFalse = isMobile ? animFalseMobile : animFalseDesc;
		const animTrue = isMobile ? animTrueMobile : animTrueDesc;

		const animationName =
			direction == 'top' && render >= 1 ? animFalse :
				direction === 'bottom' && render > 1 ? animTrue
					: animUndefined;
		const animationTime = direction == undefined && render === 1 ? '.0s' : '.5s';
		return {
			animation: `${animationName} ${animationTime} ease`,
			animationFillMode: 'forwards',
		};
	};


	const WrapperMUI = styled('div')(({theme}) => ({
		position: 'fixed',
		left: 0,
		top: 0,
		height: '100%',
		width: '100px',
		zIndex: 1,
		backgroundColor: 'rgba(223, 228, 236, 0.4)',
		transition: '.2s all ease',
		'&:hover': {
			backgroundColor: 'rgba(223, 228, 236, 1)',
		},
		[theme.breakpoints.down(1025)]: {
			right: '15px',
			bottom: '145px',
			left: 'auto',
			top: 'auto',
			zIndex: '10',
			backgroundColor: '#C4C4C4',
			width: '38px',
			height: '38px',
			boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.2)',
			borderRadius: '50%',
		}
	}));

	const ScrollButtonMUI = styled('button')(({theme}) => ({
		border: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		cursor: 'pointer',
		backgroundColor: 'transparent',
		[theme.breakpoints.down(1025)]: {
			alignItems: 'center',
		}
	}));

	const TextMUI = styled('div')(() => ({
		textAlign: 'center',
		marginTop: '16px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	}));


	const TittleMUI = styled('span')(() => ({
		fontSize: '14px',
		lineHeight: '16px',
		fontWeight: 400,
		color: 'rgba(39, 77, 130, 0.6)',
		marginRight: '5px'
	}));


	return {
		TextMUI,
		TittleMUI,
		WrapperMUI,
		ScrollButtonMUI,
		animationVisible,
	};
};
