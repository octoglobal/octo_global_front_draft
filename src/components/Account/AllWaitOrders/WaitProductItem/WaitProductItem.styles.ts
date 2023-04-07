import {styled} from '@mui/system';

const ItemSC = styled('li')<{whiteSpace?: string}>`
	max-width: 198px;
	
	font-size: 20px;
	line-height: 23px;
	font-weight: 400;
	
	padding-bottom: 15px;
	margin-right: 20px;
	
	overflow-x: scroll;
	white-space: ${({whiteSpace = 'nowrap'}) => whiteSpace};
	text-overflow: ellipsis;
`;

const CheckboxContainerSC = styled('div')`
	display: flex;
	align-items: center;
	& > span {
		margin-right: 13px;
	}
`;

export const useWaitProductItemStyles = () => ({
	ItemSC,
	CheckboxContainerSC,
});
