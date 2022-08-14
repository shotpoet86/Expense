import './styles/App.css';
import ExpenseItem from './components/ExpenseItem';

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
		amount: 450,
		date: new Date(2021, 5, 12)
	},

];

function App() {
	return (
		<div className="App">
			<ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}/>
			<ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}/>
			<ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}/>
			<ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount}/>
		</div>
	);
}

export default App;
