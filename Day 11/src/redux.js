import React from 'react';
import { connect } from 'react-redux';

const App = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Map state to component props
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// Map dispatch actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

// Connect the component to Redux
//export default connect(mapStateToProps, mapDispatchToProps)(App);