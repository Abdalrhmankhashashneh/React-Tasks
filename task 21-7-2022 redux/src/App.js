import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './Actions';


function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  return (
    <div className="App">
      <h1>Counter is : {counter} $ </h1>
      <button onClick={() => dispatch(increment())}>Deposite</button>
      <button onClick={() => dispatch(decrement())}>Withdrow</button>
      <button onClick={() => dispatch(reset())}>Clear Acoount </button>
    </div>
  );
}

export default App;
