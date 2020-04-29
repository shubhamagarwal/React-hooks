import React, { useReducer } from 'react';
import ComponentA from './component/componentA';
import ComponentB from './component/componentB';


const initialValue = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment': 
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;
  }
}
export const CountContext = React.createContext()

function App() {
  const[count, dispatch] = useReducer(reducer, initialValue);
  return(
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }} >
        <div className="app">
            <ComponentA />
            <ComponentB />
        </div>
    </CountContext.Provider>
  )
}

export default App;