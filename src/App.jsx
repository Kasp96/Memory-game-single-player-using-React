import { useState } from 'react';
import './index.css';
import { SingleCard } from './components/SingleCard/SingleCard';
import { ResetButton } from './components/ResetButton/ResetButton';

// ❓

const cardsArr = [
	{ icon: '🎸', iconId: 1, id: 1 },
	{ icon: '🎈', iconId: 2, id: 2 },
	{ icon: '🎉', iconId: 3, id: 3 },
	{ icon: '🎁', iconId: 4, id: 4 },
	{ icon: '❤️', iconId: 5, id: 5 },
	{ icon: '🌟', iconId: 6, id: 6 },
	{ icon: '🚀', iconId: 7, id: 7 },
	{ icon: '🎂', iconId: 8, id: 8 },
	{ icon: '🎸', iconId: 1, id: 9 },
	{ icon: '🎈', iconId: 2, id: 10 },
	{ icon: '🎉', iconId: 3, id: 11 },
	{ icon: '🎁', iconId: 4, id: 12 },
	{ icon: '❤️', iconId: 5, id: 13 },
	{ icon: '🌟', iconId: 6, id: 14 },
	{ icon: '🚀', iconId: 7, id: 15 },
	{ icon: '🎂', iconId: 8, id: 16 },
];

const shuffledArr = cardsArr
	.map((a) => ({ sort: Math.random(), value: a }))
	.sort((a, b) => a.sort - b.sort)
	.map((a) => a.value);

function App() {
	const [isCardRevealed, setIsCardRevealed] = useState(false)
	return (
		<>
			<div className='container'>
				<div className='app'>
					{shuffledArr.map((card) => (
						<SingleCard key={card.id}>
							{isCardRevealed ? `${card.icon}` : "❓"}
							</SingleCard>
					))}
				</div>
				<ResetButton />
			</div>
		</>
	);
}

export default App;
