
function TodoItem ( { text, completed , description, type } ) {
	return(
		<li>
		<span>V</span>
		<p>{text}</p>
		<p>{description}</p>
		<span>{type}</span>
		<span>x</span>
		</li>
	);
}

export { TodoItem };