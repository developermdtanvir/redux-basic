import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>My state counter {counter}</h1>

      {isLogged && <p>I do't show because this is conditional rendaring</p>}
      <button onClick={()=>dispatch(increment(5))}>INCREMENT</button>
      <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
     <h1>Hello World</h1>
    </div>
  );
}

export default App;
