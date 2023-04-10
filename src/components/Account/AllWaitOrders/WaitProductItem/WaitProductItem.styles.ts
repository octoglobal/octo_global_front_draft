import {styled} from '@mui/system';

const ContainerSC = styled('div')`
	border-bottom: 1px solid #C4C4C4;
	padding: 9px 0 4px;
`;

const ItemSC = styled('div')<{whiteSpace?: string}>`
	max-width: 198px;
	
	font-size: 20px;
	line-height: 23px;
	font-weight: 300;
	
	padding-bottom: 15px;
	margin-right: 20px;
	
	overflow-x: scroll;
	white-space: ${({whiteSpace = 'nowrap'}) => whiteSpace};
	@media(max-width: 768px) {
		max-width: none;
		font-size: 16px;
		line-height: 19px;
		& > span {
			font-weight: 400;
			color: #C4C4C4;
		}
	}
`;

const CheckboxContainerSC = styled('div')`
	display: flex;
	align-items: center;
	& > span {
		margin-right: 13px;
	}
`;

export const useWaitProductItemStyles = () => ({
	ContainerSC,
	ItemSC,
	CheckboxContainerSC,
});
