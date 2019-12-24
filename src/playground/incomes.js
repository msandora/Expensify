<div className="incomes">
<div className="list-header">
    <div className="show-for-mobile">Incomes</div>
    <div className="show-for-desktop">Income</div>
    <div>Amount</div>
</div>
<div className="list-body">
{
    props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
            <span>No Expenses</span>
        </div>
    ) : (
        props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
        })
    )
}
</div>
</div>  