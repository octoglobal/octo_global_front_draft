import {styled} from '@mui/system';

const ContainerSC = styled('section')`
	max-width: 976px;
	margin: 0 auto;
	height: 100%;
`;

const ColumnTopSC = styled('div')`
	padding-bottom: 5px;
	border-bottom: 2px solid #C4C4C4;
	margin-bottom: 34px;
`;

const ColumnTopRowSC = styled('ul')`
	display: flex;
	justify-content: space-between;
`;

const ColumnRowTopItemSC = styled('li')`
	list-style-type: none;
	color: #C4C4C4;
	font-size: 20px;
	line-height: 23px;
	font-weight: 400;
`;

export const useAllWitOrdersStyles = () => ({
	ContainerSC,
	ColumnTopSC,
	ColumnTopRowSC,
	ColumnRowTopItemSC
});
