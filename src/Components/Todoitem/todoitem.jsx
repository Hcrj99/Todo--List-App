import './todoitem.css'

function TodoItem ( { text, completed , description, type } ) {
	return(
		<div className='todoitem__container'>
		<span>V</span>
		<p>{text}</p>
		<p>{description}</p>
		<span>{type}</span>
		<span>x</span>
		</div>
	);
}

export { TodoItem };