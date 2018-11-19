const initialState = {
	counter: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state, 
				counter: state.counter + 1
			}
			break;
		case 'DECREMENT': 
			return {
				...state, 
				counter: state.counter - 1
			}
			break;
		case 'ADD': 
			return {
				...state, 
				counter: state.counter + 5
			}
			break;
		case 'SUBTRACT': 
			return {
				...state, 
				counter: state.counter - 5
			}
			break;
		default: 
			return state;
	}
};

export default reducer;