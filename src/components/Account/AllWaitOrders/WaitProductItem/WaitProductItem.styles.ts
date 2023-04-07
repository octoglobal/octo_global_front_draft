import {styled} from '@mui/system';

const ItemSC = styled('li')`
  list-style-type: none;
	
	color: #000000;
	font-size: 20px;
	line-height: 23px;
	font-weight: 400;
	
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	margin-right: 5px;
`;

const CheckboxContainerSC = styled('div')`
	margin-right: 13px;
	display: flex;
	align-items: center;
`;

export const useWaitProductItemStyles = () => ({
	ItemSC,
	CheckboxContainerSC,
});
