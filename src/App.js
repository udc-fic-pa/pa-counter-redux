import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import * as actions from './actions';
import * as selectors from './selectors';

const App = () => {

    const value = useSelector(selectors.getValue);
    const dispatch = useDispatch();

    return (
        <div>
            {value + ' '}
            <button onClick={() => dispatch(actions.increment())}>+</button>
            {' '}
            <button onClick={() => dispatch(actions.decrement())}>-</button>
            {' '}
            <button onClick={() => dispatch(actions.reset())}>Reset</button>
        </div>
    );

}

export default App;
