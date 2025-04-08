import './index.css';
import { SingleCard } from './components/SingleCard/SingleCard';
import { ResetButton } from './components/ResetButton/ResetButton';

const itemsArr = [
	'🎸',
	'🎈',
	'🎉',
	'🎁',
	'❤️',
	'🌟',
	'🚀',
	'🎂',
	'🎸',
	'🎈',
	'🎉',
	'🎁',
	'❤️',
	'🌟',
	'🚀',
	'🎂',
];

function App() {
	return (
		<>
			<div className='container'>
				<div className='app'>
					{itemsArr.map((item) => (
						<SingleCard>{item}</SingleCard>
					))}
				</div>
				<ResetButton />
			</div>
		</>
	);
}

export default App;
