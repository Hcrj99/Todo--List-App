import React from 'react';
import './formtodo.css';

function TodoForm ( {setOpenModal, addTodo} ) {

	const onSubmit = (event) => {
		event.preventDefault();//cancel recharge page
		setTodoType(todoType);
		addTodo(todoText, todoType);
		setOpenModal(false)
	};

	const onCancel = () => {
		setOpenModal(false);
	}

	//state of todo write by user
	const [todoText, setTodotext] = React.useState('');

	//state of type select by user
	const [todoType, setTodoType] = React.useState('');

	const onChangeText = (event) => {
		setTodotext(event.target.value);
	}

	const onChangetype = (event) => {
		setTodoType(event.target.value);
	}

	return (
		<form 
		onSubmit={onSubmit}
		className='form__create-todo'>
			<label>Write your new ToDo</label>
			<textarea 
			placeholder='Write your ToDo'
			value={todoText}
			onChange={onChangeText}
			/>
			<div className='type__container'>
				<label>Choose type</label>
				<select 
				className='form__select'
				onChange={onChangetype}>
					<option value='Select'>Select</option>
					<option value='Health'>Health</option>
					<option value='Sports'>Sports</option>
					<option value='Family'>Family</option>
					<option value='Study'>Study</option>
					<option value='Social'>Social</option>
					<option value='Home'>Home</option>
					<option value='Money'>Money</option>
				</select>
			</div>
			<div className='buttons__container'>
			<button
			type='button'
			className='form__button-cancel'
			onClick={onCancel}>Cancel</button>
			<button
			type='submit'
			className='form__button-create'>Add ToDo</button>
			</div>
		</form>
	);
}

export { TodoForm };