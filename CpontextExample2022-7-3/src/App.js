import Child from './Child';
import './App.css';
import { useState, createContext } from 'react'; // import react hooks CreateContext to use context

export const Contextname = createContext(); // create context

export default function App() {

  const [count, setCount] = useState(0); // create state and set state to 0 and setCount to count
  const [name, setName] = useState(''); // create state and set state to '' and setName to name

  const [object, setObject] = useState({ username: "", password: "", email: "" }); // create state and set state to {} and setObject to object

  return (

    <div className="App">{/* // create div with class App  */}
      <h1>Parent Component</h1>
      {/* // create provider and set value to count, setCount, name, setName, object, setObject */}
      <Contextname.Provider value={{ count, setCount, name, setName, object, setObject }}>

        <p>{count}</p> {/* // display count */}
        <p>{name}</p> {/*// display name */}
        <div> {/* // create div */}
          <button onClick={() => setCount(count + 1)}>+</button> {/* // add 1 to count */}
          <button onClick={() => setCount(count - 1)}>-</button>{/* // subtract 1 from count */}
        </div>
        <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Name' value={name} /> {/*// input name */}

        <Child /> {/* // display child component  */}

      </Contextname.Provider>  {/* // end provider */}

    </div> // end div
  ); // end return
} // end App