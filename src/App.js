import React from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';

const App = ({value, onIncrement, onDecrement, onReset}) => (
    <div>
        {value + ' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
        <button onClick={onReset}>Reset</button>
    </div>
);


const mapStateToProps = state => ({
    value: state.value
});
  
const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onReset: () => dispatch(actions.reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
