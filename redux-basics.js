const redux = require('redux');
const createStore = redux.createStore;

// initial state 
const initialState = {
	counter: 0
}

// 1. Reducer 

// The reducer takes two arguments, the current state and the action
const rootReducer = (state = initialState, action) => {
	switch (action.type) {

	}
	if (action.type === 'INC_COUNTER') {
		// imutable state, thus we need to return a new state instead 
		// of manipulating the origin state
		return {
			// copy the origin state and then override the attribute
			...state, 
			counter: state.counter + 1
		};
	}

	if (action.type === 'ADD_COUNTER') {
		// imutable state, thus we need to return a new state instead 
		// of manipulating the origin state
		return {
			// copy the origin state and then override the attribute
			...state, 
			counter: state.counter + action.value,
		};
	}
	return state;
}

// 2. store 

// Note: A store needs to be initialized using a reducer which is strongly connecting to the
//       store. And it is the only thing that actually update the store.
const store = createStore(rootReducer);
console.log(store.getState());

// 3. Subscription (right after the store is created)

// Get the snapshot of the state and notification when state is changed 
store.subscribe(() => {
	console.log('[Subscription]', store.getState());
});

// 4. Dispatching Action

// The dispatch argument is an action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

