import './todocounter.css'

function TodoCounter( { todoCompleted, totalTodo } ) {
	return (
		<>
			<h1 className='todocounter__app'>ToDo APP</h1>
			<h2 className='todocounter__title'>
			Completed {todoCompleted} / {totalTodo} ToDo's
			<progress id='progress' max={totalTodo} value={todoCompleted}>{todoCompleted}</progress>
			</h2>
		</>
	);
}

export { TodoCounter };