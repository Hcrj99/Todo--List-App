import './emptytodo.css'

function EmptyTodo() {
	return (
		<section className='empty__container'>
			<p className='empty__text'>Create ToDo's!</p>
			<div className="empty__arrowBottom"></div>
		</section>
		
	);
}

export { EmptyTodo };