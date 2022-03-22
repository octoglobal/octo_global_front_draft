export const useTextFieldUIStyle = () => {

	const TextFieldStyle = {
		width: '100%',
		height: '40px',

		background: '#FFFFFF',
		border: '1px solid #DFE4EC',
		boxSizing: 'border-box',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',

		'& .MuiOutlinedInput-root, .MuiFormControl-root': {
			width: '100%',
			height: '40px',
			borderRadius: '0px'
		},
		'& .MuiInputLabel-root': {
			top: '-8px',
		},
		'& input': {
			width: '100%',
		}
	};

	return {
		TextFieldStyle,
	};
};
