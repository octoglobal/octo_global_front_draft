import {styled} from '@mui/material';

export const useAccountAllProducListStyle = () => {
	const AccountAllProducListMUI = styled('div')(() => ({
		maxWidth: '976px',
		margin: '0 auto',
		height: '100%',
	}));


	const ProductListMUI = styled('div')(() => ({
		display: 'grid',
		gridTemplateAreas: `
        "title"
        "listContent"        
        `,		
		gap: 10,
		fontSize: 20,
		fontWeight: 300
	}));


	const ProductListTitleMUI = styled('div')(({theme}) => ({
		display: 'grid',
		color: '#C4C4C4',
		fontSize: 20,
		paddingBottom: 6,
		marginBottom: 10,
		gridTemplateAreas: `
        "chp userp emailp orderp trackp namep"
        `,		
		gridTemplateColumns: '20px repeat(5, 1fr);',
		borderBottom: '2px solid #C4C4C4',
		gap: 10,

		[theme.breakpoints.down(700)]:{
			display: 'none'
		}
	}));


	const ProductRowMUI = styled('div')(({theme}) => ({
		display: 'grid',
		gridTemplateAreas: `
        "chp userp emailp orderp trackp namep"
        `,		
		gridTemplateColumns: '30px repeat(5, 1fr);',	
		gap: 10,
		alignItems: 'center',

		
		[theme.breakpoints.down(700)]:{
			fontSize: 16,		
			gridTemplateAreas: `
        		"chp userp trackp  orderp"
				". emailp namep namep"
       		 `,
		
			gridTemplateColumns: '20px 1fr 1fr 1fr',
			borderBottom: '1px solid #C4C4C4',
			paddingBottom: 10,
			gap: 3,
		}
       
		
	}));

	const ProductCheckedMUI = styled('div')(() => ({
		gridArea: 'chp',
		
	}));

	const ProductUserIdMUI = styled('div')(() => ({
		gridArea: 'userp',
		
	}));
	const ProductEmailMUI = styled('div')(({theme}) => ({
		whiteSpace: 'nowrap',
		gridArea: 'emailp',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		[theme.breakpoints.down(700)]:{
			marginRight: -50
		}
		
	}));
	const ProductOrderMUI = styled('div')(() => ({
		gridArea: 'orderp',
		textTransform: 'uppercase',
		
	}));
	const ProductTracknumberMUI = styled('div')(() => ({
		gridArea: 'trackp',
		textTransform: 'uppercase',
		
	}));
	const ProductNameMUI = styled('div')(({theme}) => ({
		
		gridArea: 'namep',
		[theme.breakpoints.down(700)]:{
			marginLeft: 50
		}
	}));


	



   


	return {
		AccountAllProducListMUI,		
		ProductRowMUI,
		ProductListTitleMUI,
		ProductListMUI,
		ProductCheckedMUI,
		ProductUserIdMUI,
		ProductOrderMUI,
		ProductEmailMUI,
		ProductTracknumberMUI,
		ProductNameMUI,		
	};
};
