import './ResetButton.css';

export const ResetButton = ({ handleResetButton }) => {
	return (
		<button onClick={handleResetButton} className='resetBtn'>
			Zresetuj
		</button>
	);
};
