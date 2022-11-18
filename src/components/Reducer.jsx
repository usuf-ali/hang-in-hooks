import { useReducer } from "react";

const initialState = {
  count: [],
  name: "",
  rm: ""
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'ADD':
      return {
        ...state,
        count: [...state.count, state.name],
        name: ""
      }
    case 'REMOVE':
      const removeitem = {
        ...state,
        rm: action.payload,
        count: state.count.splice(state.count.indexOf(action.payload))
      }
      return removeitem;
    default:
      throw new Error();
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>REMOVE IS: {state.rm}</p>
      <input
        name=""
        type="text"
        onChange={e => dispatch({ type: 'SET_NAME', payload: e.target.value })}
        value={state.name} />
      {/* "TODO" remove this line */}
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
      {state.count.map(n => (
        <>
          <li>
            {n}
            <button
              className="btn--delete"
              value={n}
              onClick={e => dispatch({ type: 'REMOVE', payload: e.target.value })}
            >-</button>
          </li>
        </>
      ))}
    </div>
  )
}
export default Reducer;
