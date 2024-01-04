
function TodoCounter() {
	return (
		<div>
			<h1>
			Completed 3 / 5 ToDos
		</h1>
		<progress id='progress' max={5} value={3}>3</progress>
		</div>
	);
}

export { TodoCounter };