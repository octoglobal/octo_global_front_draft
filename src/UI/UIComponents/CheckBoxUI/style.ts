export const useCheckBoxUIStyle = () => {

	const CheckBoxStyle = {
		'& input': {
			width: '20px',
			height: '20px',

			background: '#FFFFFF',
			border: '1px solid #DFE4EC',
			boxSizing: 'border-box',
		},
		'& span': {
			padding: '0',
		}
	};

	return {
		CheckBoxStyle,
	};
};
