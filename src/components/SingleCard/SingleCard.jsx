import { useState } from 'react';
import './SingleCard.css';

export const SingleCard = ({ children, handleCardClick }) => {
	const [clicked, setClicked] = useState(false);

	return (
		<div
			onClick={() => setClicked(true)}
			className={`card ${clicked ? 'revealed' : ''}`}>
			{children}
		</div>
	);
};
// revealed