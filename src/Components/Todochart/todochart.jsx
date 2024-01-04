import './todochart.css'

function TodoChart ( { children } ) {
	return(
		<ul className='todochart__container'>
			{children}
		</ul>

	);
}

export { TodoChart };