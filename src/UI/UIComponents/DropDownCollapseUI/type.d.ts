export interface ICollapseItem {
	title: string;
	name: string;
	value: number;
}

interface IDropDownCollapseUIProps {
	title: string;
	required: boolean;
	collapseItems: ICollapseItem[]
}
