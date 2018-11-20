import * as ACTION_TYPES from '../actions'

const initialState = {
	counter: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.INCREMENT:
			return {
				// spread operator that copys 
				...state, 
				counter: state.counter + 1
			}
			// the break statement is not needed as the return here
			// break;
		case ACTION_TYPES.DECREMENT: 
			return {
				...state, 
				counter: state.counter - 1
			}
		case ACTION_TYPES.ADD: 
			return {
				...state, 
				counter: state.counter + action.value
			}
		case ACTION_TYPES.SUBTRACT: 
			return {
				...state, 
				counter: state.counter - action.value
			}
		default: 
			return state;
	}
};

export default reducer;