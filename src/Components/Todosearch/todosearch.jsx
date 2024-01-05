import './todosearch.css'
import React from 'react';

function TodoSearch () {
	const [search, setSearch] = React.useState('');

	return (
		<div className='todosearch__search'>
		<input placeholder='Search ToDo' className='todosearch__input'
		value={search}
		onChange={(event) => {
			console.log("evento");
			setSearch(event.target.value);
		}}></input>
		</div>
	);
}


export { TodoSearch };