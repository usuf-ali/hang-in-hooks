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
  const [state, dispatch] = useReducer(initVal, reducer);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='heading-1'> Hello World </h1>
        <h2>{state.counter}</h2>
        <button onClick={dispatch('add')}>+</button>
      </header>
    </div>
  );
}

export default App;
