import {styled} from '@mui/system';

const ContainerSC = styled('ul')`
	display: flex;
	margin-bottom: 15px;
	
	& > *:last-child {
		margin-right: 0;
	}
`;

const ItemSC = styled('li')`
  list-style-type: none;
	
	color: #000000;
	font-size: 20px;
	line-height: 23px;
	font-weight: 400;
	
	display: flex;
	align-items: center;
	margin-right: 33px;
`;

const CheckboxContainerSC = styled('div')`
	margin-right: 13px;
	display: flex;
	align-items: center;
`;

export const useWaitProductItemStyles = () => ({
	ContainerSC,
	ItemSC,
	CheckboxContainerSC,
});
