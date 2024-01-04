
function TodoCounter( { todoCompleted, totalTodo } ) {
	return (
		<>
			<h1>
			Completed {todoCompleted} / {totalTodo} ToDo's
			</h1>
			<progress id='progress' max={totalTodo} value={todoCompleted}>{todoCompleted}</progress>
		</>
	);
}

export { TodoCounter };