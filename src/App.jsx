import { useState, useEffect } from 'react';
import './index.css';
import { SingleCard } from './components/SingleCard/SingleCard';
import { ResetButton } from './components/ResetButton/ResetButton';

// ❓

const cardsArr = [
	{ icon: '🎸', iconId: 1, id: 1, revealed: false },
	{ icon: '🎈', iconId: 2, id: 2, revealed: false },
	{ icon: '🎉', iconId: 3, id: 3, revealed: false },
	{ icon: '🎁', iconId: 4, id: 4, revealed: false },
	{ icon: '❤️', iconId: 5, id: 5, revealed: false },
	{ icon: '🌟', iconId: 6, id: 6, revealed: false },
	{ icon: '🚀', iconId: 7, id: 7, revealed: false },
	{ icon: '🎂', iconId: 8, id: 8, revealed: false },
	{ icon: '🎸', iconId: 1, id: 9, revealed: false },
	{ icon: '🎈', iconId: 2, id: 10, revealed: false },
	{ icon: '🎉', iconId: 3, id: 11, revealed: false },
	{ icon: '🎁', iconId: 4, id: 12, revealed: false },
	{ icon: '❤️', iconId: 5, id: 13, revealed: false },
	{ icon: '🌟', iconId: 6, id: 14, revealed: false },
	{ icon: '🚀', iconId: 7, id: 15, revealed: false },
	{ icon: '🎂', iconId: 8, id: 16, revealed: false },
];

const shuffledArr = () =>
	cardsArr
		.map((card) => ({ sort: Math.random(), value: card }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value);

function App() {
	const [arr, setArr] = useState(shuffledArr());
	const [firstCard, setFirstCard] = useState(null);
	const [isDisabled, setIsDisabled] = useState(false);
	const [isGameWon, setIsGameWon] = useState(false);
	useEffect(() => {
		checkAllRevealedCards();
	}, [arr]);

	const checkAllRevealedCards = () => {
		const isGameFinisched = arr.some((card) => card.revealed === false);
		isGameFinisched === true ? isGameWon : setIsGameWon(true);
	};

	const handleCardClick = (cardId) => {
		if (isDisabled) return;

		const clickedCard = arr.find((card) => card.id === cardId);

		if (!clickedCard || clickedCard.revealed) return;

		const updatedCards = arr.map((card) =>
			card.id === cardId ? { ...card, revealed: true } : card
		);
		setArr(updatedCards);

		if (!firstCard) {
			setFirstCard(clickedCard);
		} else {
			setIsDisabled(true);

			if (firstCard.iconId === clickedCard.iconId) {
				setFirstCard(null);
				setIsDisabled(false);
			} else {
				setTimeout(() => {
					const resetCards = arr.map((card) =>
						card.id === firstCard.id || card.id === clickedCard.id
							? { ...card, revealed: false }
							: card
					);
					setArr(resetCards);
					setFirstCard(null);
					setIsDisabled(false);
				}, 1000);
			}
		}
	};

	const handleResetButton = () => {
		setArr(shuffledArr());
		setFirstCard(null);
		setIsDisabled(false);
		setIsGameWon(false);
	};

	return (
		<div className='container'>
			<div className='app'>
				{arr.map((card) => (
					<SingleCard
						key={card.id}
						revealed={card.revealed}
						handleCardClick={handleCardClick}
						cardId={card.id}>
						{card.revealed ? `${card.icon}` : '❓'}
					</SingleCard>
				))}
			</div>
			{isGameWon && <p>udało sie!</p>}

			<ResetButton handleResetButton={handleResetButton} />
		</div>
	);
}

export default App;
