import '../styles/ExpenseItem.css';

const date = Date();
const expenseTitle = 'car insurance';
const expenseAmount = 294.99;

function ExpenseItem() {
	return (
		<div className="expense-item">
			<div>{date}</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">
					{expenseAmount}
				</div>
			</div>
		</div>
	);
}

export default ExpenseItem;