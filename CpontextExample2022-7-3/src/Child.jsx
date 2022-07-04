import { useContext } from "react"; // import useContext from react hooks library to use the context 
import { Contextname } from "./App"; // import the context name from the App.js file

export default function Child() {

    let value = useContext(Contextname); // useContext function to get the value from the context 

    return (
        <div className="Child">
            <h1>Child</h1>

            <p>{value.count}</p> {/* display the value from the context */}
            <p>{value.name}</p> {/* display the value from the context */}
            <div> {/* // create div */}
                <button onClick={() => value.setCount(value.count + 1)}>+</button>  {/*// increment the value from the context */}
                <button onClick={() => value.setCount(value.count - 1)}>-</button>{/* // decrement the value from the context */}
            </div>
            <input type='text' onChange={(e) => value.setName(e.target.value)} placeholder='Enter Name' value={value.name} /> {/* // input field to change the value from the context */}

        </div> // return the div with the child component
    ); // return the child component
} // end of the child component
