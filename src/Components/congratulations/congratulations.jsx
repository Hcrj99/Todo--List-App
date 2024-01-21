import './congratulations.css'

function Congratulations ({ setOpenModalC }) {
	const onClose = () => {
		setOpenModalC(false);
	}

	return (
	<section className='congratulations__container'>
		<p className='congratulations__text'>Congratulations you completed all ToDo's!!</p>
		<button 
		onClick={onClose}
		className='congratulations__button'>Close</button>
	</section>
	);
}

export { Congratulations };