import {styled} from '@mui/system';

const ContainerSC = styled('section')`
	max-width: 1062px;
	margin: 0 auto;
	height: 100%;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 30px;
		width: 100%;
		height: 1.5px;
		background-color: #C4C4C4;
	}
`;

const ColumnSC = styled('ul')`
	display: grid;
	grid-template-columns: repeat(6, auto);
`;


const ColumnRowTopItemSC = styled('li')<{paddingLeft?: number}>`
	list-style-type: none;
	color: #C4C4C4;
	font-size: 20px;
	line-height: 23px;
	font-weight: 400;
	margin-bottom: 32px;
	padding-left: ${({paddingLeft}) => paddingLeft}px;
`;

export const useAllWitOrdersStyles = () => ({
	ContainerSC,
	ColumnSC,
	ColumnRowTopItemSC
});
