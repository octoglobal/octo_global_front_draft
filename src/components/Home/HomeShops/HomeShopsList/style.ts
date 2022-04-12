import {styled} from '@mui/material';

export const useHomeShopsListStyles = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		height: '445px',
		marginBottom: '100px',
		[theme.breakpoints.down(1305)]: {
			'.Oysho': {
				marginRight: '0px',
			},
			'.Uniqlo': {
				width: '260px',
			},
			'.Deichmann': {
				width: '270px',
			}
		},
		[theme.breakpoints.down(1285)]: {
			'.Deichmann': {
				width: '200px',
				transform: 'translate(70px, 20px)'
			},
			'.Benetton': {
				width: '210px',
			},
			'.Vans': {
				width: '230px',
			},
			'.Converse ': {
				width: '245px',
			},
			'.Oysho': {
				width: '270px',
				transform: 'translateY(-45px)'
			}
		},
		[theme.breakpoints.down(1255)]: {
			'.Converse': {
				transform: 'translateY(-50px)',
			},
			'.Benetton': {
				width: '180px',
			},
			'.Guess': {
				width: '185px',
			},
			'.amazon': {
				width: '200px',
			},
			'.Disney': {
				width: '100px',
			},
			'.Puma': {
				width: '130px'
			},
			'.Uniqlo': {
				width: '240px',
				transform: 'translateY(-50px)',
			},
			'.Oysho': {
				width: '240px',
				transform: 'translateY(-55px)'

			},
			'.Furla': {
				width: '160px'
			},
			'.RalphLauren': {
				width: '350px',
				transform: 'translateY(0px)',
			},
			'.Deichmann': {
				width: '230px',
				marginRight: '0px',
				transform: 'translate(10px, 30px)'
			},
			'.Vans': {
				width: '190px',
			},
			'.HM': {
				width: '220px',
			}
		},
		[theme.breakpoints.down(1215)]: {
			'.Falke': {
				width: '390px'
			},
			'.Crocs': {
				marginRight: '100px'
			},
			'.purinaOne': {
				width: '200px'
			},
		},
		[theme.breakpoints.down(1186)]: {
			'.Converse': {
				width: '245px',
			},
			'.Benetton': {
				width: '160px',
			},
			'.Crocs': {
				marginRight: '40px',
				width: '140px',
			},
			'.Falke': {
				width: '320px',
			},
			'.purinaOne': {
				width: '210px',
			},
			'.HugoBoss': {
				width: '220px',
			},
			'.HM': {
				width: '190px',
				marginRight: 0,
			},
			'.SOliver': {
				width: '180px',
			}
		},
		[theme.breakpoints.down(1165)]: {
			'.RalphLauren': {
				width: '300px',
			},
			'.Ikea': {
				width: '200px',
			},
			'.Guess': {
				width: '220px',
			},
			'.amazon': {
				width: '180px',
			},
			'.purinaOne': {
				width: '190px',
			},
			'.Benetton': {
				width: '140px',
			},
			'.Converse': {
				width: '240px'
			},
			'.Oysho': {
				width: '210px',
				transform: 'translateY(-60px)',
			},
			'.SOliver': {
				width: '160px',
			},
		},
		[theme.breakpoints.down(1135)]: {
			'.HM': {
				width: '160px',
			},
			'.Deichmann': {
				width: '200px'
			},
			'.Oysho': {
				width: '170px',
			},
		},
		[theme.breakpoints.down(1098)]: {
			'.amazon': {
				width: '150px',
			},
			'.purinaOne': {
				width: '160px',
			},
			'.HM': {
				width: '130px',
			},
			'.Benetton': {
				width: '100px',
			},
			'.Ebay': {
				width: '240px'
			},
			'.RalphLauren': {
				width: '340px'
			},
			'.Adidas': {
				width: '180px'
			},
			'.Converse': {
				width: '210px'
			},
			'.Asos': {
				width: '150px',
			},
			'.Catawiki': {
				width: '190px',
				transform: 'translateY(-60px)',
			},
			'.Levis': {
				width: '180px'
			},
			'.Vans': {
				transform: 'translateY(-105px)',
			},
			'.Ecco': {
				width: '170px'
			},
			'.Pandora': {
				width: '190px',
			},
			'.Deichmann': {
				width: '230px'
			},
		},
		[theme.breakpoints.down(1064)]: {
			'.HugoBoss': {
				width: '190px'
			}
		},
		[theme.breakpoints.down(1060)]: {
			'.HugoBoss': {
				width: '190px'
			},
			'.amazon': {
				width: '120px',
			},
			'.Benetton': {
				width: '80px',
				transform: 'translateY(-20px)',
			},
			'.Asos': {
				width: '120px',
			},
			'.Guess': {
				width: '180px'
			},
			'.Converse': {
				width: '240px'
			},
			'.Puma': {
				width: '100px'
			},
			'.Levis': {
				width: '120px'
			},
			'.Vans': {
				width: '230px'
			},
			'.Pandora': {
				width: '160px'
			},
			'.Crocs': {
				width: '120px'
			},
			'.ZARA': {
				width: '240px',
			},
			'.Obi': {
				transform: 'translate(-30px, -90px)',
			},
			'.Nike': {
				marginRight: '20px'
			},
			'.Deichmann': {
				width: '220px'
			}
		}
	}));

	return {
		ListMUI
	};
};
