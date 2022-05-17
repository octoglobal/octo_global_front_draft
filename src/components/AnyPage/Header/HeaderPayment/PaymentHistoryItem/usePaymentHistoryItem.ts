import {useMemo, useState} from 'react';

export const usePaymentHistoryItem = (amount: number, createdTime: string) => {

	const [isCollapseOpen, seIsCollapseOpen] = useState<boolean>(false);

	const handleToggleCollapse = () => {
		seIsCollapseOpen(prevState => !prevState);
	};

	const amountData = useMemo(() => {
		if (amount >= 0) return {
			color: '#23D16A',
			operation: '+',
			sum: (amount / 100).toFixed(2),
		};
		return {
			color: '#F35151',
			operation: '-',
			sum: (((amount - amount) - amount) / 100).toFixed(2),
		};
	}, [amount]);

	const payTextMarginStyle = useMemo(() => {
		let styleObj = {};
		if (amount >= 1000) {
			styleObj = {marginRight: '19px'};
		}
		if (amount >= 10000) {
			styleObj = {marginRight: '7px'};
		}
		if (amount >= 100000) {
			styleObj = {marginRight: '5px'};
		}
		return styleObj;
	}, [amount]);

	const commentOpenStyle = useMemo(() => {
		if (isCollapseOpen) {
			return {
				wordWrap: 'break-word',
				overflow: 'visible',
				whiteSpace: 'break-spaces',
			};
		};
		return {};
	}, [isCollapseOpen]);


	return {
		amountData,
		isCollapseOpen,
		commentOpenStyle,
		payTextMarginStyle,
		handleToggleCollapse,
	};
};
