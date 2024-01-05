import './todoadd.css'

function TodoAddButton () {
	return(
		<div className='add__contanier'>
		<button className='button__contanier'
		onClick={ (event) => {
			console.log("clik");
			console.log(event.target);
		}}>+</button>
		</div>
	);
}

export { TodoAddButton };