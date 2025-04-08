import { useState } from 'react';
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
		.map((a) => ({ sort: Math.random(), value: a }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value);

function App() {
	const [arr, setArr] = useState(shuffledArr);
	const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);

	const handleCardClick = (cardId, e) => {
		setArr((cards) =>
			cards.map(
				(card) => (card.id === cardId ? { ...card, revealed: true } : card),
				console.log(e)
			)
		);
	};
	const handleResetButton = () => {
		setArr(shuffledArr);
	};

	return (
		<>
			<div className='container'>
				<div className='app'>
					{arr.map((card) => (
						<SingleCard
							revealed={card.revealed ? true : false}
							key={card.id}
							handleCardClick={handleCardClick}
							cardId={card.id}>
							{card.revealed ? `${card.icon}` : '❓'}
						</SingleCard>
					))}
				</div>
				<ResetButton handleResetButton={handleResetButton} />
			</div>
		</>
	);
}

export default App;
