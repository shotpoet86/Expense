import './styles/App.css';
import ExpenseDisplay from './components/ExpenseDisplay';

const expenses = [
	{
		id: 'e1',
		title: 'toilet paper',
		amount: 94.12,
		date: new Date(2020, 7, 14)
	},
	{
		id: 'e2',
		title: 'new tv',
		amount: 799.49,
		date: new Date(2021, 2, 12)
	},
	{
		id: 'e3',
		title: 'car insurance',
		amount: 294.67,
		date: new Date(2021, 2, 20)
	},
	{
		id: 'e4',
		title: 'new desk',
		amount: 475,
		date: new Date(2021, 5, 12)
	},

];

function App() {
	return (
		<div className="App">
		<ExpenseDisplay expenses = {expenses}/>
		</div>
	);
}

export default App;
