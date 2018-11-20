const initialState = {
	counter: 0,
	results: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				// spread operator that copys 
				...state, 
				counter: state.counter + 1
			}
			// the break statement is not needed as the return here
			// break;
		case 'DECREMENT': 
			return {
				...state, 
				counter: state.counter - 1
			}
		case 'ADD': 
			return {
				...state, 
				counter: state.counter + action.value
			}
		case 'SUBTRACT': 
			return {
				...state, 
				counter: state.counter - action.value
			}
		case 'STORE_RESULT':
			return {
				...state, 
				// concat does not touch the original but create a new one 
				// state.results.push() will manipulate the original array
				results: state.results.concat({ id: new Date(), value: state.counter})
			}
		case 'DELETE_RESULT': 
			// One way to do the deletion of the array imutabely
			// const id = 2;
			// const newArray = [...state.results];
			// newArray.splice(id, 1);

			// Another way to do using filter
			const updatedResults = state.results.filter(result => result.id !== action.id);

			return {
				...state,
				results: updatedResults
			}
		default: 
			return state;
	}
};

export default reducer;