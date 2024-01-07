import './formtodo.css';

function TodoForm () {
  return (
		<form className='form__create-todo'>
			<label>Write your new ToDo</label>
			<textarea placeholder='Write your ToDo'/>
			<div className='type__container'>
			<label>Choose type</label>
				<select className='form__select'>
				<option value='javascript'>Sports</option>
					<option value='php'>Health</option>
					<option value='java'>Family</option>
					<option value='golang'>Study</option>
					<option value='python'>Social</option>
					<option value='C++'>Home</option>
					<option value='erlang'>Money</option>
				</select>
			</div>
			<div className='buttons__container'>
			<button
			className='form__button-cancel'>Cancel</button>
			<button
			className='form__button-create'>Add ToDo</button>
			</div>
		</form>
	);
}

export { TodoForm };