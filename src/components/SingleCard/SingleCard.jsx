import './SingleCard.css';

export const SingleCard = ({ children, handleCardClick, cardId, revealed }) => {
	return (
		<div
			key={cardId}
			onClick={() => handleCardClick(cardId)}
			className={revealed ? 'card revealed' : 'card'}>
			{children}
		</div>
	);
};
  