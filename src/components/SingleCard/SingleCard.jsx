import './SingleCard.css';

export const SingleCard = ({
	children,
	handleCardClick,
	cardId,
	revealed,
}) => {
	return (
		<div
			key={cardId}
			onClick={(e) => handleCardClick(cardId, e)}
			className={revealed ? 'card revealed' : 'card'}>
			{children}
		</div>
	);
};

