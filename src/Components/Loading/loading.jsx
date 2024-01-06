import './loading.css'

function Loading() {
	return (
		<section className='loading__container'>
			<div className='loading__spinner'>
    		<div className='loading__spinnerin'></div>
			</div>
			<p className='loading__text'>LOADING APP</p>
		</section>
	);
}

export { Loading };