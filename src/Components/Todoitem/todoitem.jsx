import './todoitem.css'
import { FaFlagCheckered } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";


function TodoItem ( { text, completed , type, onComplete, onDelete } ) {
	return(
		<div className='todoitem__container'>
		<span
		className={`todoitem__dcompleted ${completed && 'todoitem__completed'}`}
		onClick={onComplete}><FaFlagCheckered /></span>
		<p className={`todoitem__text ${completed && 'todoitem__text-completed'}`}>{text}</p>
		<p>{type}</p>
		<span className='todoitem__delete'
		onClick={onDelete}><MdDeleteForever /></span>
		</div>
	);
}

export { TodoItem };