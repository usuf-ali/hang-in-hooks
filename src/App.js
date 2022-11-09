import { useReducer } from 'react';
import './App.css';

const initVal = {
  counter: 1
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { counter: state.counter + 1 }
    case 'sub':
      return { counter: state.counter - 1 }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initVal);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch({ type: 'add' })}>+</button>
        <h1>{state.counter}</h1>
        <button onClick={() => dispatch({ type: 'sub' })}>-</button>
        <h2>Hello World</h2>
      </header>
    </div>
  );
}

export default App;
