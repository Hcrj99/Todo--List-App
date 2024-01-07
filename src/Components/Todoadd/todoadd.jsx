import './todoadd.css'

function TodoAddButton ( { setOpenModal } ) {
	return(
		<div className='add__contanier'>
		<button className='button__contanier'
		onClick={ () => {
			setOpenModal(state => !state);
		}}>+</button>
		</div>
	);
}

export { TodoAddButton };