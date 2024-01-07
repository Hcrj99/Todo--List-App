import './formtodo.css';

function TodoForm () {
  return (
		<form className='form__create-todo'>
			<label>Write your new ToDo</label>
			<textarea placeholder='Write your ToDo'/>
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