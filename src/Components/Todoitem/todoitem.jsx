import './todoitem.css'

function TodoItem ( { text, completed , type, onComplete } ) {
	return(
		<div className='todoitem__container'>
		<span
		className={`todoitem__dcompleted ${completed && 'todoitem__completed'}`}
		onClick={onComplete}>V</span>
		<p className={`todoitem__text ${completed && 'todoitem__text-completed'}`}>{text}</p>
		<p>{type}</p>
		<span className='todoitem__delete'>x</span>
		</div>
	);
}

export { TodoItem };