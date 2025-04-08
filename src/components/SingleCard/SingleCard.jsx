import { useState } from 'react';
import './SingleCard.css';

export const SingleCard = ({ children }) => {
	const [clicked, setClicked] = useState(false);

	return (
		<div
			onClick={() => setClicked(true)}
			className={`card ${clicked ? 'clicked' : null}`}>
			{children}
		</div>
	);
};
