import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, isLogedIn } from "./actions";

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.loggedIn);
  return (
    <div className="App">
      <h1>My state counter {counter}</h1>
      <button onClick={()=>dispatch(isLogedIn())}>Toggle Login</button>
      {isLogged && <p>I do't show because this is conditional rendaring</p>}
      <button onClick={()=>dispatch(increment(8))}>INCREMENT</button>
      <button onClick={()=>dispatch(decrement(4))}>DECREMENT</button>
     <h1>Hello World</h1>
    </div>
  );
}

export default App;
