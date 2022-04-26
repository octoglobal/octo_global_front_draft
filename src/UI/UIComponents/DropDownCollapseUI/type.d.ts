export interface ICollapseItem {
	title: string;
	name: string;
	value: number;
}

interface IDropDownCollapseUIProps {
	title: string;
	collapseItems: ICollapseItem[]
}
