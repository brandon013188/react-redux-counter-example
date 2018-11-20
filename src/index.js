import React from 'react';
import ReactDOM from 'react-dom';
// combineReducers is a function to merge all our reducers into one reducer and one state
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Create root reducer 
const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer
});

// Create the central store
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
