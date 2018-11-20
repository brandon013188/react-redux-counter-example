import React, { Component } from 'react';
//High-Order Component
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
   
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.results.map( result => (
                        <li 
                            key={result.id}
                            onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>           
            </div>
        );
    }
}

// This should be declared after the class and before the export 
// Note: the state is the state in redux
const mapStateToProps = state => {
    return {
        counter: state.counter,
        results: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 10}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', value: 10}),
        // payload is standard name to hold the js object which contains all the relevant 
        // data to pass with the action 
        // e.g. onAddCounter: () => dispatch({type: 'ADD', payload: {name: 'brandon'}})
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', id: id})

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);