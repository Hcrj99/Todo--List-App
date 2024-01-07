import './formtodo.css';

function TodoForm ( {setOpenModal} ) {

	const onSubmit = (event) => {
		event.preventDefault();//cancel recharge page
		setOpenModal(false)
	};

	const onCancel = () => {
		setOpenModal(false);
	}

	return (
		<form 
		onSubmit={onSubmit}
		className='form__create-todo'>
			<label>Write your new ToDo</label>
			<textarea placeholder='Write your ToDo'/>
			<div className='type__container'>
				<label>Choose type</label>
				<select className='form__select'>
					<option value='Sports'>Sports</option>
					<option value='Health'>Health</option>
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