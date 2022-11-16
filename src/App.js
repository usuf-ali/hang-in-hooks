import { useReducer } from 'react';
import './App.css';
import Posts from './components/Posts';

import { useWindowWidth } from './hooks/useWindowWidth';
const initVal = {
  counter: 1,
  counter2: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, counter: state.counter + 1 }
    case 'sub':
      return { ...state, counter: state.counter - 1 }
    case 'add2':
      return { ...state, counter2: state.counter2 + 2 }
    case 'sub2':
      return { ...state, counter2: state.counter2 - 2 }
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initVal);
  const onSmallScreen = useWindowWidth(765);
  const text = 'আমার সোনার বাংলা আমি কি তোমায় ভুলিতে পারি? তুমি যে সন্ধার আকাশের তারা;';

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter">
          <div className="btn">
            <button onClick={() => dispatch({ type: 'add' })}>+</button>
            <h1>{state.counter}</h1>
            <button onClick={() => dispatch({ type: 'sub' })}>-</button>
          </div>
          <div className="btn">
            <button onClick={() => dispatch({ type: 'add2' })}>+</button>
            <h2>{state.counter2}</h2>
            <button onClick={() => dispatch({ type: 'sub2' })}>-</button>
          </div>
        </div>
        <h2>your Screen is now {onSmallScreen ? 'Small' : 'large'}</h2>
        <p>
          {text}
        </p>
        <Posts />
      </header>
    </div>
  );
}

export default App;
