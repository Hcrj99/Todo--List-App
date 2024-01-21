import './todocounter.css'
import React from 'react';

function TodoCounter( { todoCompleted, totalTodo , setOpenModalC} ) {
	return (
		<>
			{React.useEffect(() => {
				if(todoCompleted === totalTodo){
					if(todoCompleted && totalTodo){
						setOpenModalC(true)
					}
				}
			}, [todoCompleted, totalTodo, setOpenModalC])}
			<h1 className='todocounter__app'>ToDo APP</h1>
			<h2 className='todocounter__title'>
			Completed {todoCompleted} / {totalTodo} ToDo's
			<progress id='progress' max={totalTodo} value={todoCompleted}>{todoCompleted}</progress>
			</h2>
		</>
	);
}

export { TodoCounter };